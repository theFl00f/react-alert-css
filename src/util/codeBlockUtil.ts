export const generateCSS = (alert: StateAlert): string => {
  return `html {
  font-size: 62.5%;
}
body {
  font-size: 1.4rem;
}              
.react-alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${alert.alertWidth}rem;
  height: ${alert.alertHeight}rem;
  background-color: ${alert.alertBackgroundColor};
  border: ${alert.alertBorderWidth}rem solid ${alert.alertBorderColor};
  border-radius: ${alert.alertBorderRadius}rem;${
    alert.message &&
    `
  color: ${alert.textColor};`
  }
  ${
    alert.alertXPadding == alert.alertYPadding
      ? `padding: ${alert.alertYPadding}rem;`
      : `padding: ${alert.alertYPadding}rem ${alert.alertXPadding}rem;`
  }
}
.react-alert button {
  margin-top: auto;
  background-color: ${alert.buttonBackgroundColor};
  border: ${alert.buttonBorderWidth}rem solid ${alert.buttonBorderColor};
  border-radius: ${alert.buttonBorderRadius}rem;
  color: ${alert.buttonTextColor};
  ${
    alert.buttonXPadding == 15
      ? `padding: ${alert.buttonYPadding}rem 0;
  width: 100%;`
      : `padding: ${alert.buttonYPadding}rem ${alert.buttonXPadding}rem;`
  }
}`;
};

export const generateHTML = (alert: StateAlert): string => {
  return `<div className="react-alert">${
    alert.message &&
    `
  <p>${alert.message}</p>`
  }
  <button>${alert.button}</button>
</div>`;
};
