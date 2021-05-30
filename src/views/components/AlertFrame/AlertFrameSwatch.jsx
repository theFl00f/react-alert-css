import React from "react";
import PropTypes from "prop-types";
import { ColorSwatch } from "../ColorSwatch";

export const AlertFrameSwatch = React.forwardRef(({ label, color }, ref) => {
  return (
    <div className="flex flex-col items-start">
      <p className="prose prose-sm text-white mb-0">{label}</p>
      <ColorSwatch className="rounded" ref={ref} color={color} />
    </div>
  );
});

AlertFrameSwatch.propTypes = {
  label: PropTypes.string.isRequired,

  color: PropTypes.string,
};

AlertFrameSwatch.displayName = "AlertFrameSwatch";
