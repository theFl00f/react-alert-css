import React from "react";
import { PaletteForm } from "../../../components/forms/PaletteForm";
import { Wrapper } from "../../../components/Wrapper";

const Palette = () => {
  return (
    <Wrapper>
      <div className="py-4 px-6 bg-rac-purple rounded rounded-tl-none border-t-2 border-rac-yellow">
        <PaletteForm />
      </div>
    </Wrapper>
  );
};

export default Palette;
