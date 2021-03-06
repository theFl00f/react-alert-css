import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { CustomColorDragLayer } from "./ReactDnD/CustomColorDragLayer";
import { DraggableColor } from "./ReactDnD/DraggableColor";

export const SelectedPalette: FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const colorParams = params.get("colors");

  if (!colorParams) return null;

  const colors = colorParams.split("-").map((color) => `#${color}`);

  const checkHasColors = (basics: string[]) => {
    for (let i = 0; i < basics.length; i++) {
      if (!colors.includes(basics[i])) {
        colors.push(basics[i]);
      }
    }
  };

  checkHasColors(["#ffffff", "#000000"]);

  return (
    <section className="p-2 bg-rac-purple rounded-b pt-1 mb-2">
      <div className="flex flex-wrap rounded overflow-hidden">
        {colors &&
          colors.map((color, index) => (
            <DraggableColor key={`${color}-${index}`} color={color} />
          ))}
        <CustomColorDragLayer />
      </div>
    </section>
  );
};
