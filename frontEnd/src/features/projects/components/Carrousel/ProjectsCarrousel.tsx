import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../app/store";
import "./ProjectsCarrousel.scss";
import { Button } from "../../../../common/components/Button/Button";
import TypingEffect from "../../TypingEffect";
import { Link } from "react-router-dom";
import { setCurrentProject } from "../../crudSlice";
import mockData from "../../../../mocks/portfolioReact.projects.json";
import { useEffect, useState } from "react";
import { Project } from "../../../../services/projectsApi";

export const ProjectsCarrousel = () => {
  const [isData, setIsData] = useState(null);
  const dispatch = useDispatch();
  const currentProject = useSelector(
    (state: RootState) => state.crud.currentProject
  );
  const projectsData = useSelector(
    (state: RootState) =>
      state.api.queries["getProjects({})"]?.data as Project[]
  );
  useEffect(() => {
    if (projectsData && projectsData.length > 0) {
      setIsData(projectsData);
      console.log("apiData", projectsData);
    } else {
      setIsData(mockData);
      console.log("mockData", isData);
    }
  }, [projectsData, isData]);
  useEffect(() => {
    if (isData && isData.length > 0) {
      dispatch(
        setCurrentProject({
          Number: 0,
          Name: isData[0].name,
          Client: isData[0].client,
          Description: isData[0].description,
          Technologies: isData[0].technologies,
          Links: isData[0].links,
          ImgURL: isData[0].imgURL,
        })
      );
    }
  }, [isData, dispatch]);
  const handleClick = (direction: string) => {
    const projectMaxNumber = isData?.length - 1;
    if (direction === "next") {
      const newCurrentProject =
        currentProject + 1 > projectMaxNumber ? 0 : currentProject + 1;
      dispatch(
        setCurrentProject({
          Number: newCurrentProject,
          Name: isData[newCurrentProject].name,
          Client: isData[newCurrentProject].client,
          Description: isData[newCurrentProject].description,
          Technologies: isData[newCurrentProject].technologies,
          Links: isData[newCurrentProject].links,
          ImgURL: isData[newCurrentProject].imgURL,
        })
      );
    } else {
      const newCurrentProject =
        currentProject - 1 < 0 ? projectMaxNumber : currentProject - 1;
      dispatch(
        setCurrentProject({
          Number: newCurrentProject,
          Name: isData[newCurrentProject].name,
          Client: isData[newCurrentProject].client,
          Description: isData[newCurrentProject].description,
          Technologies: isData[newCurrentProject].technologies,
          Links: isData[newCurrentProject].links,
          ImgURL: isData[newCurrentProject].imgURL,
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
      {isData ? (
        <figure>
          <Link to="/CRUDprojects" className="crud">
            CRUD
          </Link>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/${isData[currentProject].imgURL}`}
            alt=""
          />
          <figcaption>
            <h2>{isData[currentProject].name}</h2>
            <pre>
              <code>
                <TypingEffect text={isData[currentProject].description} />
              </code>
            </pre>
            <div className="lists">
              <ul className="technologies">
                {isData[currentProject].technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <ul className="links">
                {isData[currentProject].links.website && (
                  <li>
                    <a
                      href={isData[currentProject].links.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-globe"></i>
                    </a>
                  </li>
                )}
                {isData[currentProject].links.github && (
                  <li>
                    <a
                      href={isData[currentProject].links.github}
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
