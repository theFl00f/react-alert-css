import axios from "axios";

const basePath = process.env.REACT_APP_BASE_URL || "";

export default class AlertDao {
  addAlert({
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
  }) {
    return axios.post(`${basePath}/api/alert`, {
      user: "Anonymous",
      alertName: "Untitled",
      textValues: {
        message,
        button: buttonText,
      },
      css: {
        alertBorderColor,
        alertBackgroundColor,
        buttonBorderColor,
        buttonBackgroundColor,
        textColor,
        buttonTextColor,
      },
      dimensions: {
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
      },
    });
  }

  getAlerts() {
    return axios.get(`${basePath}/api/alerts`);
  }

  getAlert(id) {
    return axios.get(`${basePath}/api/alert/${id}`);
  }
}
