import React, {
  CSSProperties,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { AlertButton } from ".";
import { Context } from "../../../../context/Store";
import { InlineEdit } from "../../InlineEdit";
import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertButtonBorder: FC = () => {
  const [state, dispatch] = useContext(Context);
  const getComputedStyles = (xPadding: number): CSSProperties => {
    const styles: CSSProperties = {
      backgroundColor: state.buttonBorderColor,
      padding: `${state.buttonBorderWidth}rem`,
      borderRadius: `${state.buttonBorderRadius}rem`,
    };
    if (xPadding == 15) {
      return {
        ...styles,
        width: "100%",
      };
    }
    return {
      ...styles,
    };
  };

  const [computedStyles, setComputedStyles] = useState<CSSProperties>(
    getComputedStyles(state.buttonXPadding)
  );
  const { color, drop } = useColorDrop(state.buttonBorderColor || "#000000");

  const saveText = (value: string) => {
    dispatch({ type: "SET_BUTTON_TEXT", payload: value });
  };

  useEffect(() => {
    dispatch({ type: "SET_BUTTON_BORDER_COLOR", payload: color });
  }, [color, dispatch]);

  useEffect(() => {
    setComputedStyles(getComputedStyles(state.buttonXPadding));
  }, [
    state.buttonXPadding,
    state.buttonBorderColor,
    state.buttonBorderWidth,
    state.buttonBorderRadius,
  ]);

  useEffect;

  return (
    <div className="max-w-full" style={computedStyles} ref={drop}>
      <AlertButton>
        <InlineEdit text={state.button} saveText={saveText} />
      </AlertButton>
    </div>
  );
};
