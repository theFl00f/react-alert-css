import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Store from "./context/Store";
import routes from "./routes/routes";
import { GlobalLayout } from "./views/layouts/GlobalLayout";

function App() {
  const baseUrl = process.env.REACT_APP_DEPLOYED || "";
  console.log({ baseUrl });
  return (
    <Store>
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <GlobalLayout>
            <Route path={`${baseUrl}/`} exact>
              <Redirect to={`${baseUrl}/create`} />
            </Route>
            {routes.map(({ path, component, label, exact }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                component={component}
              />
            ))}
          </GlobalLayout>
        </DndProvider>
      </BrowserRouter>
    </Store>
  );
}

export default App;
