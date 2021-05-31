import React from "react";

export const Loader = () => {
  return (
    <div
      className="border-4 border-white border-opacity-30 rounded-full h-10 w-10 flex justify-center items-center animate-spin"
      style={{ borderTopColor: "rgba(114,219,210, 1)" }}
    ></div>
  );
};
