import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { FC, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

export const Nav: FC = () => {
  const ref = useRef<HTMLElement | null>(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  // close on click out of nav
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (
        !ref.current ||
        (!!ref.current && ref.current.contains(e.target as Node))
      ) {
        return;
      }
      setIsExpanded(false);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, setIsExpanded]);

  // close on tap out of nav
  useEffect(() => {
    const listener = (e: TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      setIsExpanded(false);
    };
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, setIsExpanded]);

  //close on esc keypress
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        return setIsExpanded(false);
      }
      return;
    };
    if (isExpanded) {
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }
  }, [isExpanded, setIsExpanded]);

  const ulClasses = classNames(
    {
      "flex flex-col items-center fixed top-14 right-4 bg-rac-deep-purple bg-opacity-80 rounded-b p-2 gap-2":
        isExpanded,
      hidden: !isExpanded,
    },
    "md:flex md:gap-2"
  );

  return (
    <nav ref={ref}>
      <button
        aria-expanded={isExpanded}
        aria-controls="menu"
        onClick={toggleExpanded}
        className="md:hidden px-2 hover:text-rac-yellow focus:text-rac-light-peach fixed top-4 text-2xl bg-rac-deep-purple bg-opacity-60 rounded"
        style={{ right: "calc((1vw / 24) + 1.5rem)" }}
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
