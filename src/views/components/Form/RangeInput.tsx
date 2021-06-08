import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  min?: number;
  max?: number;
  step?: number;
}

export const RangeInput: FC<Props> = ({ label, className, id, ...args }) => {
  let classes = "prose prose-sm";
  if (className) {
    classes += " " + className;
  }
  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="range" {...args} />
    </div>
  );
};
