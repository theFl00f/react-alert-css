import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";

export const useColorDrop = (initialColor) => {
  const [color, setColor] = useState(initialColor);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COLORS,
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      setColor(item.color);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  return { isOver, drop, color };
};
