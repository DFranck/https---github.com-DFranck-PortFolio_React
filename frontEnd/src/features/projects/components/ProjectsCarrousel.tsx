import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import "./ProjectsCarrousel.scss";
import { Button } from "../../../common/components/Button/Button";
import { imgFormater } from "../projectsFormater";
// import { setCurrentProject } from "../projectsSlice";
import TypingEffect from "../TypingEffect";
import { Link } from "react-router-dom";
import { setCurrentProject } from "../../CRUDfrom/crudSlice";
interface Project {
  id: string;
  name: string;
  imgURL: string;
  currentProject: number;
  description: string;
  client: string;
  technologies: [string];
  links: [string];
}

export const ProjectsCarrousel = () => {
  const dispatch = useDispatch();
  const currentProject = useSelector(
    (state: RootState) => state.crud.currentProject
  );
  const projectsData = useSelector(
    (state: RootState) =>
      state.api.queries["getProjects({})"]?.data as Project[]
  );

  const formatedData = imgFormater(projectsData);
  const handleClick = (direction: string) => {
    const projectMaxNumber = projectsData?.length - 1;
    if (direction === "next") {
      const newCurrentProject =
        currentProject + 1 > projectMaxNumber ? 0 : currentProject + 1;
      dispatch(
        setCurrentProject({
          Number: newCurrentProject,
          Name: projectsData[newCurrentProject].name,
          Client: projectsData[newCurrentProject].client,
          Description: projectsData[newCurrentProject].description,
          Technologies: projectsData[newCurrentProject].technologies,
          Links: projectsData[newCurrentProject].links,
          ImgURL: projectsData[newCurrentProject].imgURL,
        })
      );
    } else {
      const newCurrentProject =
        currentProject - 1 < 0 ? projectMaxNumber : currentProject - 1;
      dispatch(
        setCurrentProject({
          Number: newCurrentProject,
          Name: projectsData[newCurrentProject].name,
          Client: projectsData[newCurrentProject].client,
          Description: projectsData[newCurrentProject].description,
          Technologies: projectsData[newCurrentProject].technologies,
          Links: projectsData[newCurrentProject].links,
          ImgURL: projectsData[newCurrentProject].imgURL,
        })
      );
    }
  };
  return (
    <article>
      <Button
        className="caroussel"
        text={"⮜"}
        onClick={() => handleClick("prev")}
      />
      {formatedData ? (
        <figure>
          <Link to="/CRUDprojects" className="crud">
            CRUD
          </Link>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${formatedData[currentProject].imgURL}`}
            alt=""
          />
          <figcaption>
            <h2>{formatedData[currentProject].name}</h2>
            <pre>
              <code>
                <TypingEffect text={formatedData[currentProject].description} />
              </code>
            </pre>
            <div className="lists">
              <ul className="technologies">
                {formatedData[currentProject].technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ul className="links">
                {formatedData[currentProject].lienProjet && (
                  <li>
                    <a
                      href={formatedData[currentProject].lienProjet}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-globe"></i>
                    </a>
                  </li>
                )}
                {formatedData[currentProject].lienGitHub && (
                  <li>
                    <a
                      href={formatedData[currentProject].lienGitHub}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </figcaption>
        </figure>
      ) : null}
      <Button
        className="caroussel"
        text={"⮞"}
        onClick={() => handleClick("next")}
      />
    </article>
  );
};
