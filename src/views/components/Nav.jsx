import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-2">
        {routes.map(({ path, label }) => (
          <li key={label}>
            <NavLink
              activeClassName="border-t-2 border-rac-yellow bg-rac-purple font-medium"
              className="prose prose-lg px-4 py-1 rounded hover:text-rac-yellow focus:text-rac-light-peach focus:outline-white text-white"
              to={path}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
