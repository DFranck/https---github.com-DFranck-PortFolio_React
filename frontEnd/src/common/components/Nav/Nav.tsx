import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
export const Nav = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="about">A Propos</Link>
      <Link to="projects">Projets</Link>
      <Link to="contact">Contact</Link>
    </nav>
  );
};
