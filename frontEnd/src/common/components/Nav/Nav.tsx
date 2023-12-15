import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";
export const Nav = () => {
  const location = useLocation();
  console.log(location.pathname);

  const getLinkClassName = (path: string) => {
    return location.pathname === path ? "current-view" : "";
  };

  return (
    <nav>
      <Link to="/" className={getLinkClassName("/")}>
        Accueil
      </Link>
      <Link to="/about" className={getLinkClassName("/about")}>
        A Propos
      </Link>
      <Link to="/projects" className={getLinkClassName("/projects")}>
        Projets
      </Link>
    </nav>
  );
};
