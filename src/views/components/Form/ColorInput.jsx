import React from "react";
import PropTypes from "prop-types";

export const ColorInput = ({ label, ...args }) => {
  return (
    <label className="flex flex-col md:flex-row">
      {label || args.value}
      <input type="color" {...args} />
    </label>
  );
};

ColorInput.propTypes = {
  label: PropTypes.string.isRequired,
};
