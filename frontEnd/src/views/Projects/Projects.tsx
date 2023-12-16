import React from "react";
import "./Project.scss";
import { Hero } from "../../common/components/Hero/Hero";
import { ProjectsCards } from "../../features/projects/ProjectsCards";
import { useGetProjectsQuery } from "../../services/projectsApi";
export const Project = () => {
  useGetProjectsQuery({});
  return (
    <main className="projects">
      <Hero />
      <h1>Franck Dufournet PortFolio Projets Publique</h1>
      <span className="head-light"></span>
      <section className="figure">
        <figure>
          <figcaption>
            <h2>title</h2>
          </figcaption>
        </figure>
      </section>
      {/* <section className="details"></section> */}
    </main>
  );
};
