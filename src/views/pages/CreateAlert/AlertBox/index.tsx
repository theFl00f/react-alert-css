import React, { FC, useContext, useState } from "react";
import { useHistory } from "react-router";
import { alertDao } from "../../../../context/persistentContext";
import { Context } from "../../../../context/Store";
import { AlertFrame } from "../../../components/AlertFrame";
import { CreateAlertForm } from "../../../components/forms/CreateAlertForm";
import { Modal } from "../../../components/Modal";
import { SelectedPalette } from "../../../components/SelectedPalette";
import { ExportedCodeBlock } from "../../../components/ExportedCodeBlock";
import { generateCSS, generateHTML } from "../../../../util/codeBlockUtil";
import { UserAlert } from "../../../components/UserAlert";
import { stateToAlert } from "../../../../util/alertFormat";
import { InlineEdit } from "../../../components/InlineEdit";
import { Button } from "../../../components/Button";
import { Wrapper } from "../../../components/Wrapper";
import { AlertFormModal } from "../../../components/AlertFormModal";
import { Loader } from "../../../components/Loader";
import { timeout } from "../../../../util/timeout";

const AlertBox: FC = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addAlert = (state: StateAlert) => {
    return alertDao.addAlert(state);
  };

  const openCreatorForm = () => {
    setFormIsOpen(true);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    //send state to DB
    if (state.error) {
      throw state.error;
    }
    try {
      const [response] = await Promise.all([addAlert(state), timeout(1000)]);
      setIsLoading(false);
      if (response) {
        history.push("/alerts");
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const input = stateToAlert({ ...state });

  const setUser = (user: string) => {
    return dispatch({ type: "SET_USER", payload: user });
  };

  const setAlertName = (alertName: string) => {
    return dispatch({ type: "SET_ALERT_NAME", payload: alertName });
  };

  return (
    <>
      {formIsOpen && (
        <AlertFormModal isOpen={formIsOpen} setIsOpen={setFormIsOpen}>
          <div className="prose max-w-none flex items-center mt-4 flex-col">
            <form onSubmit={handlePublish}>
              <h1>Name your alert</h1>
              <p>
                Click each input to edit your name and the alert title! <br />{" "}
                (Or just <span className="font-mono">Submit</span> to stay
                anonymous)
              </p>
              <div className="flex flex-wrap justify-between items-end mt-2">
                <div className="w-2/3">
                  <span className="text-2xl underline transition-colors rac-transition hover:text-rac-peach">
                    <InlineEdit
                      text={state.alertName}
                      saveText={setAlertName}
                    />
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span>By </span>
                    <span className="font-mono underline transition-colors rac-transition hover:text-rac-peach">
                      <InlineEdit text={state.user} saveText={setUser} />
                    </span>
                  </div>
                </div>
                <div className="mb-2">
                  <Button>Submit</Button>
                </div>
              </div>
            </form>
            <div className="flex items-center justify-center mt-2">
              {!isLoading && <UserAlert alert={input} />}
              {isLoading && <Loader />}
            </div>
          </div>
        </AlertFormModal>
      )}

      <Wrapper>
        <AlertFrame />
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-end">
          <SelectedPalette />
          <Modal afterClose={openCreatorForm} openButtonText="Export to code">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ExportedCodeBlock
                title="CSS"
                highlightingClass="language-css"
                code={generateCSS(state)}
              />
              <ExportedCodeBlock
                title="HTML"
                highlightingClass="language-html"
                code={generateHTML(state)}
              />
            </div>
          </Modal>
        </div>
        <CreateAlertForm />
      </Wrapper>
    </>
  );
};

export default AlertBox;
