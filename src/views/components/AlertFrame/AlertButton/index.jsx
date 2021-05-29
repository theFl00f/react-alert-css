import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../context/Store";
import { useColorDrop } from "../../ReactDnD/useColorDrop";
import PropTypes from "prop-types";

export const AlertButton = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const getComputedStyles = (xPadding) => {
    const styles = {
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
  const [computedStyles, setComputedStyles] = useState(
    getComputedStyles(state.buttonXPadding)
  );
  const { _isOver, color, drop } = useColorDrop(
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
      disabled
      style={computedStyles}
      ref={drop}
    >
      {children}
    </button>
  );
};

AlertButton.propTypes = {
  children: PropTypes.element.isRequired,
};
