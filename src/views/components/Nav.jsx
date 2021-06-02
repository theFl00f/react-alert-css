import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

export const Nav = () => {
  const ref = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // close on click out of nav
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      setIsExpanded(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, setIsExpanded]);

  //close on esc keypress
  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Escape" || e.key === "Esc") {
      return setIsExpanded(false);
    }
    return;
  };

  const ulClasses = classNames(
    {
      "flex flex-col items-center absolute top-4 right-1 -left-40 bg-rac-deep-purple bg-opacity-80 rounded-b py-2 gap-2":
        isExpanded,
      hidden: !isExpanded,
    },
    "md:flex md:gap-2"
  );

  return (
    <nav className="relative" ref={ref}>
      <button
        aria-expanded={isExpanded}
        aria-controls="menu"
        onClick={toggleExpanded}
        onKeyDown={handleKeyDown}
        className="md:hidden px-2 hover:text-rac-yellow focus:text-rac-light-peach fixed top-4 right-8 text-2xl bg-rac-deep-purple bg-opacity-60 rounded"
      >
        <span className="sr-only">Menu</span>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={ulClasses}>
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
