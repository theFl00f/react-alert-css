import React, {
  CSSProperties,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

interface Props {
  style?: CSSProperties;
  color: string;
  className?: string;
}

export const ColorSwatch: ForwardRefExoticComponent<
  Props & RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, Props>(
  ({ style, color, className }, ref) => {
    let classes = "h-12 w-12";
    if (className) classes += " " + className;
    return (
      <div
        className={classes}
        ref={ref}
        style={{ backgroundColor: color, ...style }}
      ></div>
    );
  }
);

ColorSwatch.displayName = "ColorSwatch";
