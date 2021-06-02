import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../../routes/createAlert.routes";

export const CreateAlertNav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex">
        {routes.map(({ path, label }) => (
          <li className="w-1/2 sm:w-auto" key={label}>
            <NavLink
              className="px-2 sm:mr-2 block border-t-2 border-transparent hover:text-rac-yellow focus:text-rac-yellow"
              activeClassName="bg-rac-purple rounded-t border-rac-yellow font-medium"
              activeStyle={{ boxShadow: "0 .5rem #585bd1" }}
              to={`${path}${location.search}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
