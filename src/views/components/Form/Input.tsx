import React, { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: FC<Props> = ({ label, ...args }) => {
  return (
    <label>
      {label}
      <input type="text" {...args} />
    </label>
  );
};
