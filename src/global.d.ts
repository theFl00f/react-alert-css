type ThemeOptions = "analogous" | "monochrome" | "split" | "triad" | "random";

interface AlertDimensions {
  alertWidth: number;
  alertHeight: number;
  alertBorderRadius: number;
  alertBorderWidth: number;
  alertXPadding: number;
  alertYPadding: number;
  buttonXPadding: number;
  buttonYPadding: number;
  buttonBorderRadius: number;
  buttonBorderWidth: number;
}

interface AlertColors {
  alertBorderColor: string;
  alertBackgroundColor: string;
  buttonBorderColor: string;
  buttonBackgroundColor: string;
  textColor: string;
  buttonTextColor: string;
}

interface AlertTextValues {
  message: string;
  button: string;
}

type StateAlert = AlertDimensions &
  AlertColors &
  AlertTextValues & {
    user: string;
    alertName: string;
  };

interface DBAlert {
  user: string;
  alertName: string;
  textValues: AlertTextValues;
  css: AlertColors;
  dimensions: AlertDimensions;
}

interface DBAlertWithId extends DBAlert {
  _id: string;
}

type State = StateAlert & {
  palette: string[];
  theme: ThemeOptions;
  error: Error | null;
};

type PaletteAction =
  | { type: "SET_PALETTE"; payload: string[] }
  | { type: "SET_THEME"; payload: ThemeOptions };

type ColorActionStrings =
  | "SET_ALERT_BORDER_COLOR"
  | "SET_ALERT_BACKGROUND_COLOR"
  | "SET_BUTTON_BORDER_COLOR"
  | "SET_BUTTON_BACKGROUND_COLOR"
  | "SET_TEXT_COLOR"
  | "SET_BUTTON_TEXT_COLOR";

type ColorAction = {
  type: ColorActionStrings;
  payload: string;
};

type TextAction = {
  type: "SET_MESSAGE" | "SET_BUTTON_TEXT";
  payload: string;
};

type DimensionsActionStrings =
  | "SET_ALERT_WIDTH"
  | "SET_ALERT_HEIGHT"
  | "SET_ALERT_BORDER_RADIUS"
  | "SET_ALERT_BORDER_WIDTH"
  | "SET_ALERT_Y_PADDING"
  | "SET_ALERT_X_PADDING"
  | "SET_BUTTON_Y_PADDING"
  | "SET_BUTTON_X_PADDING"
  | "SET_BUTTON_BORDER_RADIUS"
  | "SET_BUTTON_BORDER_WIDTH";

type DimensionsAction = {
  type: DimensionsActionStrings;
  payload: number;
};

type NameAction = {
  type: "SET_USER" | "SET_ALERT_NAME";
  payload: string;
};

type ErrorAction = {
  type: "SET_ERROR";
  payload: Error;
};

type Action =
  | PaletteAction
  | ColorAction
  | TextAction
  | DimensionsAction
  | NameAction
  | ErrorAction;

interface RouteProps {
  path: string;
  component:
    | ComponentType<RouteComponentProps<unknown>>
    | ComponentType<unknown>;
  label: string;
  exact?: boolean;
}

interface DragItem {
  color: string;
}
