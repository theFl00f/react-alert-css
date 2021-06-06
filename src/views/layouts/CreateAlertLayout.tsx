import React, { FC } from "react";
import { Wrapper } from "../components/Wrapper";
import { CreateAlertNav } from "../pages/CreateAlert/CreateAlertNav";

export const CreateAlertLayout: FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <CreateAlertNav />
      </Wrapper>
      {children}
    </>
  );
};
