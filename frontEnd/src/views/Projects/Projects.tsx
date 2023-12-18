import React from "react";
import "./Project.scss";
import { Hero } from "../../common/components/Hero/Hero";
import { useGetProjectsQuery } from "../../services/projectsApi";
import { ProjectsCarrousel } from "../../features/projects/components/ProjectsCarrousel";
export const Project = () => {
  useGetProjectsQuery({});
  return (
    <main className="projects">
      <Hero />
      <h1>Franck Dufournet PortFolio Projets Publique</h1>
      <span className="head-light"></span>
      <section>
        <ProjectsCarrousel />
      </section>
    </main>
  );
};
