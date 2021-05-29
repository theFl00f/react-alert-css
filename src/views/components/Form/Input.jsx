import React from "react";
import PropTypes from "prop-types";

export const Input = ({ label, ...args }) => {
  return (
    <label>
      {label}
      <input type="text" {...args} />
    </label>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
};
