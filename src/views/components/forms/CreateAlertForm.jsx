import React, { useContext } from "react";
import { Context } from "../../../context/Store";
import { Form } from "../Form";
import { RangeInput } from "../Form/RangeInput";

export const CreateAlertForm = () => {
  const [state, dispatch] = useContext(Context);

  const handleAlertWidthChange = (e) => {
    dispatch({ type: "SET_ALERT_WIDTH", payload: e.target.value });
  };

  const handleAlertHeightChange = (e) => {
    dispatch({ type: "SET_ALERT_HEIGHT", payload: e.target.value });
  };

  const handleAlertBorderRadiusChange = (e) => {
    dispatch({ type: "SET_ALERT_BORDER_RADIUS", payload: e.target.value });
  };

  const handleAlertBorderWidthChange = (e) => {
    dispatch({ type: "SET_ALERT_BORDER_WIDTH", payload: e.target.value });
  };

  const handleAlertYPaddingChange = (e) => {
    dispatch({ type: "SET_ALERT_Y_PADDING", payload: e.target.value });
  };

  const handleAlertXPaddingChange = (e) => {
    dispatch({ type: "SET_ALERT_X_PADDING", payload: e.target.value });
  };

  const handleButtonYPaddingChange = (e) => {
    dispatch({ type: "SET_BUTTON_Y_PADDING", payload: e.target.value });
  };

  const handleButtonXPaddingChange = (e) => {
    dispatch({ type: "SET_BUTTON_X_PADDING", payload: e.target.value });
  };

  const handleButtonBorderRadiusChange = (e) => {
    dispatch({ type: "SET_BUTTON_BORDER_RADIUS", payload: e.target.value });
  };

  const handleButtonBorderWidthChange = (e) => {
    dispatch({ type: "SET_BUTTON_BORDER_WIDTH", payload: e.target.value });
  };

  const inputClasses = "grid grid-cols-2";

  return (
    <Form className="grid grid-cols-2 gap-y-4 gap-x-12">
      <RangeInput
        id="alertWidth"
        className={inputClasses}
        label="Alert width"
        min={8}
        max={36}
        defaultValue={state.alertWidth}
        onChange={handleAlertWidthChange}
      />
      <RangeInput
        id="alertHeight"
        className={inputClasses}
        label="Alert height"
        min={7}
        max={20}
        defaultValue={state.alertHeight}
        onChange={handleAlertHeightChange}
      />
      <RangeInput
        id="alertBorderRadius"
        className={inputClasses}
        label="Alert border radius"
        min={0}
        max={15}
        step={0.5}
        defaultValue={state.alertBorderRadius}
        onChange={handleAlertBorderRadiusChange}
      />
      <RangeInput
        id="alertBorderWidth"
        className={inputClasses}
        label="Alert border width"
        min={0}
        max={2}
        step={0.1}
        defaultValue={state.alertBorderWidth}
        onChange={handleAlertBorderWidthChange}
      />
      <RangeInput
        id="alertYPadding"
        className={inputClasses}
        label="Alert Y padding"
        min={0}
        max={5}
        step={0.5}
        defaultValue={state.alertYPadding}
        onChange={handleAlertYPaddingChange}
      />
      <RangeInput
        id="alertXPadding"
        className={inputClasses}
        label="Alert X padding"
        min={0}
        max={15}
        step={0.5}
        defaultValue={state.alertXPadding}
        onChange={handleAlertXPaddingChange}
      />

      <RangeInput
        id="buttonYPadding"
        className={inputClasses}
        label="Button Y padding"
        min={0}
        max={2.5}
        step={0.2}
        defaultValue={state.buttonYPadding}
        onChange={handleButtonYPaddingChange}
      />
      <RangeInput
        id="buttonXPadding"
        className={inputClasses}
        label="Button X padding"
        min={0}
        max={15}
        defaultValue={state.buttonXPadding}
        onChange={handleButtonXPaddingChange}
      />
      <RangeInput
        id="buttonBorderRadius"
        className={inputClasses}
        label="Button border radius"
        min={0}
        max={10}
        step={0.5}
        defaultValue={state.buttonBorderRadius}
        onChange={handleButtonBorderRadiusChange}
      />
      <RangeInput
        id="buttonBorderWidth"
        className={inputClasses}
        label="Button border width"
        min={0}
        max={2}
        step={0.1}
        defaultValue={state.buttonBorderWidth}
        onChange={handleButtonBorderWidthChange}
      />
    </Form>
  );
};
