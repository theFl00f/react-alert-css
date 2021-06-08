//spread alert
export const alertToState = (state: DBAlert): StateAlert => {
  return {
    alertName: state.alertName,
    user: state.user,
    button: state.textValues.button,
    message: state.textValues.message,
    ...state.css,
    ...state.dimensions,
  };
};

export const stateToAlert = (alert: StateAlert): DBAlert => {
  return {
    user: alert.user,
    alertName: alert.alertName,
    textValues: {
      message: alert.message,
      button: alert.button,
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
