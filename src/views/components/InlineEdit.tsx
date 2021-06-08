import React, { FC } from "react";
import EditableLabel from "react-inline-editing";

interface Props {
  text: string;
  saveText: (value: string) => void;
}

export const InlineEdit: FC<Props> = ({ text, saveText }) => {
  return (
    <>
      <EditableLabel
        text={text || "Click to edit"}
        onFocusOut={saveText}
        labelClassName="cursor-pointer"
        inputClassName="bg-transparent border border-indigo-300 border-solid max-w-full px-1"
      />
    </>
  );
};
