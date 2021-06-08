import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { ColorSwatch } from "../ColorSwatch";
import { SketchPicker, ColorResult } from "react-color";

interface Props {
  label: string;
  value: string;
  handleChange: (e: ColorResult, value: string) => void;
}

export const ColorInput: FC<Props> = ({ label, value, handleChange }) => {
  const pickerNode = useRef<HTMLLabelElement>(null);
  const inputNode = useRef<HTMLButtonElement>(null);
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

  const handleColorClick = () => {
    return pickerIsOpen ? closePicker() : openPicker();
  };

  const handleOverlayClick = (event: Event) => {
    if (
      (!!pickerNode.current &&
        pickerNode.current.contains(event.target as Node)) ||
      (!!inputNode.current && inputNode.current.contains(event.target as Node))
    )
      return;
    closePicker();
  };

  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Esc" || event.key === "Escape") {
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
        <button
          className="p-1"
          style={{ outlineColor: value }}
          ref={inputNode}
          onClick={handleColorClick}
          type="button"
        >
          <span className="sr-only">Click to open color picker</span>
          <ColorSwatch color={value} className="rounded" />
        </button>
        <label
          ref={pickerNode}
          style={{ right: -90 }}
          className={getPickerClasses()}
        >
          <p className="sr-only">Pick a color</p>
          <SketchPicker
            disableAlpha
            color={value}
            onChangeComplete={(e) => handleChange(e, value)}
          />
        </label>
      </div>
    </div>
  );
};
