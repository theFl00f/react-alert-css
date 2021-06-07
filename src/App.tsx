import React, { FC } from "react";
import {
  DndProvider,
  TouchTransition,
  MouseTransition,
} from "react-dnd-multi-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Store from "./context/Store";
import routes from "./routes/routes";
import { GlobalLayout } from "./views/layouts/GlobalLayout";
import { Alert } from "./views/pages/templates/Alert";

const HTML5toTouch = {
  backends: [
    {
      id: "html5",
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      id: "touch",
      backend: TouchBackend,
      options: { enableMouseEvents: true },
      preview: true,
      transition: TouchTransition,
    },
  ],
};

const App: FC = () => {
  return (
    <Store>
      <BrowserRouter>
        <DndProvider options={HTML5toTouch}>
          <GlobalLayout>
            <Route path={`/`} exact>
              <Redirect to={`/create`} />
            </Route>
            {routes.map(({ path, component, label, exact }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                component={component}
              />
            ))}
            <Route path={`/alerts/:id`} component={Alert} exact />
          </GlobalLayout>
        </DndProvider>
      </BrowserRouter>
    </Store>
  );
};

export default App;
