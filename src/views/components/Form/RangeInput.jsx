import React from "react";
import PropTypes from "prop-types";

export const RangeInput = ({ label, className, id, ...args }) => {
  let classes = "prose prose-sm";
  if (className) {
    classes += " " + className;
  }
  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="range" {...args} />
    </div>
  );
};

RangeInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};
