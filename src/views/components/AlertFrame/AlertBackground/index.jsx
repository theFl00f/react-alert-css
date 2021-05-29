import React, { useContext, useEffect } from "react";
import { Context } from "../../../../context/Store";
import { InlineEdit } from "../../InlineEdit";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import { AlertButtonBorder } from "../AlertButton/AlertButtonBorder";

export const AlertBackground = () => {
  const [state, dispatch] = useContext(Context);
  const { _isOver, color, drop } = useColorDrop(
    state.alertBackgroundColor || "#4f4f4f"
  );

  const saveText = (value) => {
    dispatch({ type: "SET_MESSAGE", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "SET_ALERT_BACKGROUND_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <div
      style={{
        backgroundColor: state.alertBackgroundColor,
        width: `${state.alertWidth}rem`,
        height: `${state.alertHeight}rem`,
        borderRadius: `${state.alertBorderRadius - state.alertBorderWidth}rem`,
        padding: `${state.alertYPadding}rem ${state.alertXPadding}rem`,
      }}
      className="flex flex-col items-center justify-between"
      ref={drop}
    >
      <div style={{ color: state.textColor }}>
        <InlineEdit text={state.message} saveText={saveText} />
      </div>
      <AlertButtonBorder />
    </div>
  );
};
