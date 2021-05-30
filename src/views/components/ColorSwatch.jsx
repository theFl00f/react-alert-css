import React from "react";
import PropTypes from "prop-types";

export const ColorSwatch = React.forwardRef(
  ({ style, color, className }, ref) => {
    let classes = "h-12 w-12";
    if (className) classes += " " + className;
    return (
      <div
        className={classes}
        ref={ref}
        style={{ backgroundColor: color, ...style }}
      ></div>
    );
  }
);

ColorSwatch.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ColorSwatch.displayName = "ColorSwatch";
