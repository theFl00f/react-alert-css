import React, { FC, InputHTMLAttributes, useContext } from "react";
import { Context } from "../../../context/Store";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const RadioInput: FC<Props> = ({ label, id, ...args }) => {
  const [state] = useContext(Context);
  let classes =
    "flex flex-col items-center prose prose-sm rounded border-2 border-rac-green";
  if (state.theme === args.value) {
    classes += " bg-rac-green font-medium";
  }
  return (
    <div className={classes}>
      <input className="sr-only" id={id} type="radio" {...args} />
      <label className="cursor-pointer w-full text-center py-0.5" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
