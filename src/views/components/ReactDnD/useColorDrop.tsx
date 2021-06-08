import { useState } from "react";
import { ConnectDropTarget, DropTargetMonitor, useDrop } from "react-dnd";
import { ItemTypes } from "./constants";

export const useColorDrop = (
  initialColor: string
): { isOver: boolean; drop: ConnectDropTarget; color: string } => {
  const [color, setColor] = useState<string>(initialColor);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.COLORS,
    drop: (item: DragItem, monitor: DropTargetMonitor) => {
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
