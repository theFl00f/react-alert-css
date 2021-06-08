import React, { FC } from "react";

interface Props {
  item: string;
}

export const NotFound: FC<Props> = ({ item }) => {
  return (
    <div className="prose text-white text-center">
      <h1 style={{ color: "#feb8bd" }} className="text-white">
        <span className="capitalize">{item}</span> not found
      </h1>
      <p>
        Sorry, the <span className="font-mono italic">{item}</span> could not be
        found.
      </p>
    </div>
  );
};
