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
      <section>
        <h1>Projects</h1>
        <ProjectsCards />
      </section>
    </main>
  );
};
