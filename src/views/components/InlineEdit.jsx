import React from "react";
import EditableLabel from "react-inline-editing";
import PropTypes from "prop-types";

export const InlineEdit = ({ text, saveText }) => {
  return (
    <>
      <EditableLabel
        text={text || "Click to edit"}
        onFocusOut={saveText}
        inputClassName="bg-transparent border border-indigo-300 border-solid max-w-full px-1"
      />
    </>
  );
};

InlineEdit.propTypes = {
  text: PropTypes.string,
  saveText: PropTypes.func.isRequired,
};
