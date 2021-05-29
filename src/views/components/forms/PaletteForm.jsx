import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Store";
import { Button } from "../Button";
import { Form } from "../Form";
import { RadioInput } from "../Form/RadioInput";
import { TinyColor } from "../TinyColor";
import { colorOptions } from "./constants";

export const PaletteForm = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  const baseUrl = process.env.REACT_APP_DEPLOYED || "";

  const handleChange = (event) => {
    const newTheme = event.target.value;
    const prevTheme = state.theme;

    if (prevTheme !== newTheme) {
      dispatch({ type: "SET_THEME", payload: newTheme });
    }
  };

  return (
    <Form className="py-4 flex flex-col gap-6">
      <div
        className="grid grid-cols-2 sm:grid-cols-5 gap-y-2 gap-x-4 sm:gap-2"
        onChange={handleChange}
      >
        {colorOptions.map((color, index) => (
          <RadioInput
            {...color}
            key={index}
            defaultChecked={color.value === state.theme}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 place-items-center">
        <TinyColor />
      </div>
      <div>
        <Button>
          <Link to={`${baseUrl}/create/edit-alert${history.location.search}`}>
            Next
          </Link>
        </Button>
      </div>
    </Form>
  );
};
