import React, { useContext } from "react";
import { useHistory } from "react-router";
import { alertDao } from "../../../../context/persistentContext";
import { Context } from "../../../../context/Store";
import { AlertFrame } from "../../../components/AlertFrame";
import { CreateAlertForm } from "../../../components/forms/CreateAlertForm";
import { Modal } from "../../../components/Modal";
import { SelectedPalette } from "../../../components/SelectedPalette";
import { ExportedCodeBlock } from "./ExportedCodeBlock";

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
              code={`html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
}
              
.react-alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${state.alertWidth}rem;
  height: ${state.alertHeight}rem;
  background-color: ${state.alertBackgroundColor};
  border: ${state.alertBorderWidth}rem solid ${state.alertBorderColor};
  border-radius: ${state.alertBorderRadius}rem;${
                state.message &&
                `
  color: ${state.textColor};`
              }
  ${
    state.alertXPadding == state.alertYPadding
      ? `padding: ${state.alertYPadding}rem;`
      : `padding: ${state.alertYPadding}rem ${state.alertXPadding}rem;`
  }
}

.react-alert button {
  margin-top: auto;
  background-color: ${state.buttonBackgroundColor};
  border: ${state.buttonBorderWidth}rem solid ${state.buttonBorderColor};
  border-radius: ${state.buttonBorderRadius}rem;
  color: ${state.buttonTextColor};
  ${
    state.buttonXPadding == 15
      ? `padding: ${state.buttonYPadding}rem 0;
  width: 100%;`
      : `padding: ${state.buttonYPadding}rem ${state.buttonXPadding}rem;`
  }
}
`}
            />
            <ExportedCodeBlock
              title="HTML"
              highlightingClass="language-html"
              code={`<div className="react-alert">${
                state.message &&
                `
  <p>${state.message}</p>`
              }
  <button>${state.buttonText}</button>
</div>`}
            />
          </div>
        </Modal>
      </div>
      <CreateAlertForm />
    </>
  );
};

export default AlertBox;
