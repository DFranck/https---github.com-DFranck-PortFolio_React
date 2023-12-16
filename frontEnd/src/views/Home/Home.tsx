import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { Hero } from "../../common/components/Hero/Hero";

export const Home = () => {
  const title = {
    h2: "Franck Dufournet",
    h1: "<Port Folio>",
  };
  return (
    <main className="home">
      <Hero />
      <h1>Franck Dufournet PortFolio Accueil</h1>
      <span className="head-light"></span>
      <Link to="/projects">{title.h1}</Link>
      <Link to="/about">{title.h2}</Link>
      <section
        className="github"
        onClick={() => window.open("https://github.com/DFranck", "_blank")}
      >
        <i className="fa-brands fa-github"></i>
        <h2>Mon Github</h2>
      </section>
      <section
        className="linkedin"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/franck-dufournet-239446151/",
            "_blank"
          )
        }
      >
        <i className="fa-brands fa-linkedin"></i>
        <h2>Mon Linkedin</h2>
      </section>
    </main>
  );
};
