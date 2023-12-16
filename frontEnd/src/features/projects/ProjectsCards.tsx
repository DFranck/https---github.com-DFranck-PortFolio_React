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
      {formatedProjectsData?.map((project: any, index: number) => (
        <li>
          <article>
            <figure>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/${project.image}`}
                alt=""
              />
              <figcaption>
                <h3>{project.titre}</h3>
              </figcaption>
            </figure>
          </article>
        </li>
      ))}
    </ul>
  );
};
