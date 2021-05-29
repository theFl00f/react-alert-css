import React from "react";
import PropTypes from "prop-types";

export const Wrapper = ({ children }) => {
  return <div className="w-11/12 max-w-6xl mx-auto">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
