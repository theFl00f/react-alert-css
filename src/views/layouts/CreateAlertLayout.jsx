import React from "react";
import { Wrapper } from "../components/Wrapper";
import { CreateAlertNav } from "../pages/CreateAlert/CreateAlertNav";
import PropTypes from "prop-types";

export const CreateAlertLayout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <CreateAlertNav />
      </Wrapper>
      {children}
    </>
  );
};

CreateAlertLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
