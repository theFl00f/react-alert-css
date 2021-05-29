import React, { useContext, useEffect } from "react";
import { Context } from "../../../context/Store";
import { useColorDrop } from "../ReactDnD/useColorDrop";
import { AlertBackgroundBorder } from "./AlertBackground/AlertBackgroundBorder";
import { AlertFrameSwatch } from "./AlertFrameSwatch";

export const AlertFrame = () => {
  const [state, dispatch] = useContext(Context);

  const textColor = useColorDrop(state.textColor || "#ffffff");
  const buttonTextColor = useColorDrop(state.buttonTextColor || "#ffffff");

  useEffect(() => {
    dispatch({ type: "SET_TEXT_COLOR", payload: textColor.color });
  }, [dispatch, textColor.color]);

  useEffect(() => {
    dispatch({ type: "SET_BUTTON_TEXT_COLOR", payload: buttonTextColor.color });
  }, [dispatch, buttonTextColor.color]);

  return (
    <div className=" bg-rac-purple py-4 gap-x-8 rounded-r rounded-tl border-t-2 border-rac-yellow flex justify-center">
      <AlertBackgroundBorder />
      <article className="flex flex-col items-start">
        <AlertFrameSwatch
          label="Text color"
          ref={textColor.drop}
          color={state.textColor}
        />
        <AlertFrameSwatch
          label="Button text color"
          ref={buttonTextColor.drop}
          color={state.buttonTextColor}
        />
      </article>
    </div>
  );
};
