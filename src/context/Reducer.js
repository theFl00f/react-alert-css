const Reducer = (state, action) => {
  switch (action.type) {
    // overall palette selection
    case "SET_PALETTE":
      return {
        ...state,
        palette: action.payload,
      };

    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    // alert colors
    case "SET_ALERT_BORDER_COLOR":
      return {
        ...state,
        alertBorderColor: action.payload,
      };
    case "SET_ALERT_BACKGROUND_COLOR":
      return {
        ...state,
        alertBackgroundColor: action.payload,
      };
    case "SET_BUTTON_BORDER_COLOR":
      return {
        ...state,
        buttonBorderColor: action.payload,
      };
    case "SET_BUTTON_BACKGROUND_COLOR":
      return {
        ...state,
        buttonBackgroundColor: action.payload,
      };
    case "SET_TEXT_COLOR":
      return {
        ...state,
        textColor: action.payload,
      };
    case "SET_BUTTON_TEXT_COLOR":
      return {
        ...state,
        buttonTextColor: action.payload,
      };

    // text input
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    case "SET_BUTTON_TEXT":
      return {
        ...state,
        buttonText: action.payload,
      };

    // dimensions

    case "SET_ALERT_WIDTH":
      return {
        ...state,
        alertWidth: action.payload,
      };
    case "SET_ALERT_HEIGHT":
      return {
        ...state,
        alertHeight: action.payload,
      };
    case "SET_ALERT_BORDER_RADIUS":
      return {
        ...state,
        alertBorderRadius: action.payload,
      };
    case "SET_ALERT_BORDER_WIDTH":
      return {
        ...state,
        alertBorderWidth: action.payload,
      };
    case "SET_ALERT_Y_PADDING":
      return {
        ...state,
        alertYPadding: action.payload,
      };
    case "SET_ALERT_X_PADDING":
      return {
        ...state,
        alertXPadding: action.payload,
      };

    case "SET_BUTTON_Y_PADDING":
      return {
        ...state,
        buttonYPadding: action.payload,
      };
    case "SET_BUTTON_X_PADDING":
      return {
        ...state,
        buttonXPadding: action.payload,
      };
    case "SET_BUTTON_BORDER_RADIUS":
      return {
        ...state,
        buttonBorderRadius: action.payload,
      };
    case "SET_BUTTON_BORDER_WIDTH":
      return {
        ...state,
        buttonBorderWidth: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
