import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import "./ProjectsCarrousel.scss";
import { Button } from "../../../common/components/Button/Button";
import { imgFormater } from "../projectsFormater";
import { setCurrentProject } from "../projectsSlice";
import TypingEffect from "../TypingEffect";
interface Project {
  id: string;
  titre: string;
  image: string;
  currentProject: number;
}

export const ProjectsCarrousel = () => {
  const dispatch = useDispatch();
  const currentProject = useSelector(
    (state: RootState) => state.projects.currentProject
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
      dispatch(setCurrentProject(newCurrentProject));
    } else {
      const newCurrentProject =
        currentProject - 1 < 0 ? projectMaxNumber : currentProject - 1;
      dispatch(setCurrentProject(newCurrentProject));
    }
  };

  console.log(formatedData);

  return (
    <article>
      <Button text={"⮜"} onClick={() => handleClick("prev")} />
      {formatedData ? (
        <figure>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${formatedData[currentProject].image}`}
            alt=""
          />
          <figcaption>
            <h2>{formatedData[currentProject].titre}</h2>
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
      <Button text={"⮞"} onClick={() => handleClick("next")} />
    </article>
  );
};
