import React, { FC } from "react";

export const Wrapper: FC = ({ children }) => {
  return <div className="w-11/12 max-w-6xl mx-auto">{children}</div>;
};
