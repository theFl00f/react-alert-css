import React from "react";
import { ColorSwatch } from "../ColorSwatch";

interface Props {
  label: string;
  color: string;
}

export const AlertFrameSwatch = React.forwardRef<HTMLDivElement, Props>(
  ({ label, color }, ref) => {
    return (
      <div className="flex flex-col items-start">
        <p className="prose prose-sm text-white mb-0">{label}</p>
        <ColorSwatch className="rounded" ref={ref} color={color} />
      </div>
    );
  }
);

AlertFrameSwatch.displayName = "AlertFrameSwatch";
