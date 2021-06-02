import React from "react";
import PropTypes from "prop-types";

export const NotFound = ({ item }) => {
  return (
    <div className="prose text-white text-center">
      <h1 style={{ color: "#feb8bd" }} className="text-white">
        <span className="capitalize">{item}</span> not found
      </h1>
      <p>Sorry, that {item} does not exist.</p>
    </div>
  );
};

NotFound.propTypes = {
  item: PropTypes.string.isRequired,
};
