import React from "react";
import { useLocation } from "react-router-dom";
import { CustomColorDragLayer } from "./ReactDnD/CustomColorDragLayer";
import { DraggableColor } from "./ReactDnD/DraggableColor";

export const SelectedPalette = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const colors = params
    .get("colors")
    .split("-")
    .map((color) => `#${color}`);

  const checkHasColors = (basics) => {
    for (let i = 0; i < basics.length; i++) {
      if (!colors.includes(basics[i])) {
        colors.push(basics[i]);
      }
    }
  };

  checkHasColors(["#ffffff", "#000000"]);

  return (
    <section className="p-2 bg-rac-purple rounded-b pt-1 mb-2">
      <div className="flex rounded overflow-hidden">
        {colors &&
          colors.map((color, index) => (
            <DraggableColor key={`${color}-${index}`} color={color} />
          ))}
        <CustomColorDragLayer />
      </div>
    </section>
  );
};
