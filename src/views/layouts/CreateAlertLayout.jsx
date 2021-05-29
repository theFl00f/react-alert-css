import React from "react";
import { Wrapper } from "../components/Wrapper";
import { CreateAlertNav } from "../pages/CreateAlert/CreateAlertNav";
import PropTypes from "prop-types";

export const CreateAlertLayout = ({ children }) => {
  return (
    <div>
      <Wrapper>
        <CreateAlertNav />
        {children}
      </Wrapper>
    </div>
  );
};

CreateAlertLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
