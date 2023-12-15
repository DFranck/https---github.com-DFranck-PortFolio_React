import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import "./ProjectsCards.scss";
interface Project {
  id: string;
  titre: string;
  image: string;
}

export const ProjectsCards = () => {
  const projectsData = useSelector(
    (state: RootState) =>
      state.api.queries["getProjects({})"]?.data as Project[]
  );
  // console.log(projectsData);
  const imgFormater = (projectsData) => {
    const formatedData = projectsData?.map((project) => {
      return {
        ...project,
        image: project.image.split("/").pop(),
      };
    });
    console.log(formatedData);
    return formatedData;
  };
  const formatedProjectsData = imgFormater(projectsData);

  return (
    <ul className="cards-projects">
      {formatedProjectsData?.map((project) => (
        <li key={project.id} className="card-project">
          <span className="image"></span>
          <h3>{project.titre}</h3>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <a href={project.lienGitHub}>
            <i className="fa-brands fa-github"></i>Code Source
          </a>
          <a href={project.lienProjet}>
            <i className="fa-solid fa-globe"></i>Version Déployée
          </a>
        </li>
      ))}
    </ul>
  );
};
