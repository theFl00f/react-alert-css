import React from "react";
import PropTypes from "prop-types";

export const Form = ({ className, children, ...args }) => {
  let classes = "bg-white text-black rounded py-4 px-6";

  if (className) {
    classes += " " + className;
  }

  return (
    <form className={classes} {...args}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
