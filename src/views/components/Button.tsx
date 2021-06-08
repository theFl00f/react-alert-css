import React, { ButtonHTMLAttributes, FC } from "react";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...args
}) => {
  return (
    <button
      className="bg-rac-light-peach px-6 rounded py-1 font-medium text-black hover:bg-rac-peach focus:bg-rac-peach transition-colors rac-transition text-opacity-90 hover:text-opacity-100"
      {...args}
    >
      {children}
    </button>
  );
};
