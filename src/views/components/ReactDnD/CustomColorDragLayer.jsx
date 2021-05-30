import React, { memo } from "react";
import { useDragLayer } from "react-dnd";
import { ColorSwatch } from "../ColorSwatch";
import { ItemTypes } from "./constants";

export const CustomColorDragLayer = memo(function CustomColorDragLayer() {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => {
      return {
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        isDragging: monitor.isDragging(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
      };
    });

  const getStyles = (initialOffset, currentOffset) => {
    if (!initialOffset || !currentOffset) {
      return {
        display: "none",
      };
    }
    const { x, y } = currentOffset;
    const transform = `translate(calc(${x}px - 3rem), ${y}px) rotate(5deg)`;
    return {
      transform,
      WebkitTransform: transform,
    };
  };

  const styles = getStyles(initialOffset, currentOffset);

  if (isDragging && itemType === ItemTypes.COLORS)
    return (
      <ColorSwatch
        color={item.color}
        style={{
          ...styles,
          opacity: 0.7,
          pointerEvents: "none",
        }}
        className="cursor-move rounded fixed top-0 z-50"
      />
    );
  return null;
});

CustomColorDragLayer.displayName = "CustomColorDragLayer";
