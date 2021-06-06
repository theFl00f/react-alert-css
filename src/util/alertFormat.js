//spread alert
export const alertToState = (state) => {
  return {
    alertName: state.alertName,
    user: state.user,
    buttonText: state.textValues.button,
    message: state.textValues.message,
    ...state.css,
    ...state.dimensions,
  };
};

export const stateToAlert = (alert) => {
  return {
    user: "Anonymous",
    alertName: "Untitled",
    textValues: {
      message: alert.message,
      button: alert.buttonText,
    },
    css: {
      alertBorderColor: alert.alertBorderColor,
      alertBackgroundColor: alert.alertBackgroundColor,
      buttonBorderColor: alert.buttonBorderColor,
      buttonBackgroundColor: alert.buttonBackgroundColor,
      textColor: alert.textColor,
      buttonTextColor: alert.buttonTextColor,
    },
    dimensions: {
      alertWidth: alert.alertWidth,
      alertHeight: alert.alertHeight,
      alertBorderRadius: alert.alertBorderRadius,
      alertBorderWidth: alert.alertBorderWidth,
      alertXPadding: alert.alertXPadding,
      alertYPadding: alert.alertYPadding,
      buttonXPadding: alert.buttonXPadding,
      buttonYPadding: alert.buttonYPadding,
      buttonBorderRadius: alert.buttonBorderRadius,
      buttonBorderWidth: alert.buttonBorderWidth,
    },
  };
};
