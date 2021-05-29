import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CreateAlertLayout } from "../../layouts/CreateAlertLayout";
import routes from "../../../routes/createAlert.routes";
import { Context } from "../../../context/Store";
import { joinColors } from "../../../util/colorUtil";

const CreateAlert = () => {
  const [state] = useContext(Context);
  const baseUrl = process.env.REACT_APP_DEPLOYED || "";

  const params = new URLSearchParams({
    colors: joinColors(state.palette),
  });

  const redirectPath = state.palette.length
    ? `${baseUrl}/create/edit-alert?${params}`
    : `${baseUrl}/create/palette`;
  return (
    <CreateAlertLayout>
      <Switch>
        {routes.map(({ path, component, label, exact }) => (
          <Route key={label} path={path} exact={exact} component={component} />
        ))}
        <Route path={`${baseUrl}/create`}>
          <Redirect to={redirectPath} />
        </Route>
      </Switch>
    </CreateAlertLayout>
  );
};

export default CreateAlert;
