import React, { useContext } from "react";
import { useHistory } from "react-router";
import { alertDao } from "../../../../context/persistentContext";
import { Context } from "../../../../context/Store";
import { AlertFrame } from "../../../components/AlertFrame";
import { CreateAlertForm } from "../../../components/forms/CreateAlertForm";
import { Modal } from "../../../components/Modal";
import { SelectedPalette } from "../../../components/SelectedPalette";
import { ExportedCodeBlock } from "../../../components/ExportedCodeBlock";
import {
  generateCSS,
  generateHTML,
} from "../../../components/ExportedCodeBlock/codeBlockUtil";

const AlertBox = () => {
  const [state] = useContext(Context);
  const history = useHistory();

  const addAlert = ({
    alertBorderColor,
    alertBackgroundColor,
    buttonBorderColor,
    buttonBackgroundColor,
    textColor,
    buttonTextColor,
    message,
    buttonText,
    alertWidth,
    alertHeight,
    alertBorderRadius,
    alertBorderWidth,
    alertXPadding,
    alertYPadding,
    buttonXPadding,
    buttonYPadding,
    buttonBorderRadius,
    buttonBorderWidth,
  }) => {
    return alertDao.addAlert({
      alertBorderColor,
      alertBackgroundColor,
      buttonBorderColor,
      buttonBackgroundColor,
      textColor,
      buttonTextColor,
      message,
      buttonText,
      alertWidth,
      alertHeight,
      alertBorderRadius,
      alertBorderWidth,
      alertXPadding,
      alertYPadding,
      buttonXPadding,
      buttonYPadding,
      buttonBorderRadius,
      buttonBorderWidth,
    });
  };

  const handlePublish = async () => {
    //send state to DB
    if (state.error) {
      throw state.error;
    }
    try {
      const response = await addAlert(state);
      if (response) {
        history.push("/alerts");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <AlertFrame />
      <div className="flex justify-between items-end">
        <SelectedPalette />
        <Modal handlePublish={handlePublish} openButtonText="Export to code">
          <div className="grid grid-cols-2 gap-4">
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
    </>
  );
};

export default AlertBox;
