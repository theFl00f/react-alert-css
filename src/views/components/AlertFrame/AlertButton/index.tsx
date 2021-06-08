import React, {
  CSSProperties,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { Context } from "../../../../context/Store";
import { useColorDrop } from "../../ReactDnD/useColorDrop";

export const AlertButton: FC = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const getComputedStyles = (xPadding: number): CSSProperties => {
    const styles: CSSProperties = {
      backgroundColor: state.buttonBackgroundColor,
      color: state.buttonTextColor,
      borderRadius: `${state.buttonBorderRadius}rem`,
    };
    if (xPadding == 15) {
      const style = {
        ...styles,
        width: "100%",
        padding: `${state.buttonYPadding}rem 0`,
      };
      return style;
    }
    const style = {
      ...styles,
      padding: `${state.buttonYPadding}rem ${xPadding}rem`,
    };
    return style;
  };
  const [computedStyles, setComputedStyles] = useState<CSSProperties>(
    getComputedStyles(state.buttonXPadding)
  );
  const { color, drop } = useColorDrop(
    state.buttonBackgroundColor || "#1f1f1f"
  );

  useEffect(() => {
    dispatch({ type: "SET_BUTTON_BACKGROUND_COLOR", payload: color });
  }, [color, dispatch]);

  useEffect(() => {
    setComputedStyles(getComputedStyles(state.buttonXPadding));
  }, [
    state.buttonXPadding,
    state.buttonYPadding,
    state.buttonBackgroundColor,
    state.buttonTextColor,
    state.buttonBorderRadius,
  ]);

  return (
    <button
      className="max-w-full cursor-default"
      tabIndex={-1}
      style={computedStyles}
      ref={drop}
    >
      {children}
    </button>
  );
};
