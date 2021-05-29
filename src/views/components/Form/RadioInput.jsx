import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../../../context/Store";

export const RadioInput = ({ label, id, ...args }) => {
  const [state] = useContext(Context);
  let classes =
    "flex flex-col items-center prose prose-sm rounded border-2 border-rac-green";
  if (state.theme === args.value) {
    classes += " bg-rac-green font-medium";
  }
  return (
    <div className={classes}>
      <input className="hidden" id={id} type="radio" {...args} />
      <label className="cursor-pointer w-full text-center py-0.5" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
