import { AlertBackground } from ".";
import React, { FC, useContext, useEffect } from "react";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import { Context } from "../../../../context/Store";

export const AlertBackgroundBorder: FC = () => {
  const [state, dispatch] = useContext(Context);
  const { color, drop } = useColorDrop(state.alertBorderColor || "#ffffff");

  useEffect(() => {
    dispatch({ type: "SET_ALERT_BORDER_COLOR", payload: color });
  }, [color, dispatch]);

  return (
    <div
      className="p-4 outline-white"
      style={{
        backgroundColor: state.alertBorderColor,
        padding: `${state.alertBorderWidth}rem`,
        borderRadius: `${state.alertBorderRadius}rem`,
      }}
      ref={drop}
    >
      <AlertBackground />
    </div>
  );
};
