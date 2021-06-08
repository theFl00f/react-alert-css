import React, { FC, FormHTMLAttributes } from "react";

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({
  className,
  children,
  ...args
}) => {
  let classes = "bg-white text-black rounded py-4 px-6";

  if (className) {
    classes += " " + className;
  }

  return (
    <form className={classes} {...args}>
      {children}
    </form>
  );
};
