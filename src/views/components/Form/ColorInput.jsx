import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ColorSwatch } from "../ColorSwatch";
import { SketchPicker } from "react-color";

export const ColorInput = ({ label, value, handleChange }) => {
  const pickerNode = useRef();
  const inputNode = useRef();
  const [pickerIsOpen, setPickerIsOpen] = useState(false);

  const getPickerClasses = () => {
    let classes = "absolute z-50 ";
    if (pickerIsOpen) {
      classes += "block";
    } else {
      classes += "hidden";
    }
    return classes;
  };

  const openPicker = () => {
    setPickerIsOpen(true);
  };

  const closePicker = () => {
    setPickerIsOpen(false);
  };

  const handleColorClick = (event) => {
    event.preventDefault();
    return pickerIsOpen ? closePicker() : openPicker();
  };

  const handleOverlayClick = (event) => {
    if (
      pickerNode.current.contains(event.target) ||
      inputNode.current.contains(event.target)
    )
      return;
    closePicker();
  };

  const handleEscKey = useCallback((event) => {
    if (event.keyCode === 27) {
      closePicker();
    }
  }, []);

  useEffect(() => {
    //listen for click outside of color picker
    document.addEventListener("mousedown", handleOverlayClick);
    return () => {
      document.removeEventListener("mousedown", handleOverlayClick);
    };
  }, []);

  useEffect(() => {
    //listen for click outside of color picker
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <label htmlFor={value}>{label || value}</label>
      <div className="relative">
        <button ref={inputNode} onClick={handleColorClick}>
          <ColorSwatch color={value} />
        </button>
        <div
          ref={pickerNode}
          style={{ right: -90 }}
          className={getPickerClasses()}
        >
          <SketchPicker
            disableAlpha
            color={value}
            onChangeComplete={(e) => handleChange(e, value)}
          />
        </div>
      </div>
    </div>
  );
};

ColorInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
};
