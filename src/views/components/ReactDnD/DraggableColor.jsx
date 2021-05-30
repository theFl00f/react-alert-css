import React, { memo, useEffect } from "react";
import { useDrag } from "react-dnd";
import { ColorSwatch } from "../ColorSwatch";
import { ItemTypes } from "../ReactDnD/constants";
import PropTypes from "prop-types";
import { getEmptyImage } from "react-dnd-html5-backend";

export const DraggableColor = memo(function DraggableColor({ color }) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.COLORS,
      item: { color },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [color]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <ColorSwatch
      ref={drag}
      color={color}
      style={{ opacity: isDragging ? 0.7 : 1 }}
      className="cursor-move"
    />
  );
});

DraggableColor.propTypes = {
  color: PropTypes.string.isRequired,
};
