import React, { createContext, Dispatch, FC, useReducer } from "react";
import Reducer from "./Reducer";

const initialState: State = {
  palette: [],
  theme: "analogous",
  alertBorderColor: "",
  alertBackgroundColor: "",
  buttonBorderColor: "",
  buttonBackgroundColor: "",
  textColor: "",
  buttonTextColor: "",
  message: "",
  button: "Close",
  alertWidth: 24,
  alertHeight: 14,
  alertBorderRadius: 0,
  alertBorderWidth: 0.5,
  alertXPadding: 1,
  alertYPadding: 1,
  buttonXPadding: 4,
  buttonYPadding: 0.4,
  buttonBorderRadius: 0,
  buttonBorderWidth: 0.5,
  user: "Anonymous",
  alertName: "Untitled",
  error: null,
};

const Store: FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => null,
]);
export default Store;
