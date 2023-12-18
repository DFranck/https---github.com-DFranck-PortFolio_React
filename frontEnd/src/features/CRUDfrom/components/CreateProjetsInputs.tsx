import models from "../../../common/models";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setName,
  setClient,
  setDescription,
  setTechnologies,
  setLinks,
  setImgURL,
} from "../crudSlice";
export const CreateProjetsInputs = () => {
  const dispatch = useDispatch();
  const [newTechnologies, setNewTechnologies] = useState(["add technologies"]);
  const newProjectInputs = Object.keys(models.project).flatMap((project) => {
    if (project === "description") {
      return (
        <>
          <label key={"label" + project} htmlFor={project}>
            {project.toUpperCase()}
          </label>
          <textarea
            key={"textarea" + project}
            id={project}
            onChange={(e) => handleInputChange(e)}
          />
        </>
      );
    } else if (project === "links") {
      return Object.keys(models.project[project]).map((link) => {
        return (
          <>
            <label key={"label" + link} htmlFor={link}>
              {link.toUpperCase()}
            </label>
            <input
              key={"input" + link}
              id={link}
              onChange={(e) => handleInputChange(e)}
            />
          </>
        );
      });
    } else if (project === "technologies") {
      return (
        <>
          <div className="technologies-label">
            <label key={"label" + project} htmlFor={project}>
              {project.toUpperCase()}
            </label>
            <button
              className="add-technologies"
              type="button"
              onClick={() =>
                setNewTechnologies([...newTechnologies, "add technologies"])
              }
            >
              +
            </button>
          </div>
          <div className="technologies">
            {newTechnologies.map((tech, index) => (
              <input
                key={"input" + tech}
                id={tech}
                onChange={(e) => handleInputChange(e)}
              />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          <label key={"label" + project} htmlFor={project}>
            {project.toUpperCase()}
          </label>
          <input
            key={"input" + project}
            id={project}
            onChange={(e) => handleInputChange(e)}
          />
        </>
      );
    }
  });
  const handleInputChange = (e) => {
    switch (e.target.id) {
      case "name":
        dispatch(setName(e.target.value));
        break;
      case "client":
        dispatch(setClient(e.target.value));
        break;
      case "description":
        dispatch(setDescription(e.target.value));
        break;
      case "technologies":
        dispatch(setTechnologies(e.target.value));
        break;
      case "links":
        dispatch(setLinks(e.target.value));
        break;
      case "imgURL":
        dispatch(setImgURL(e.target.value));
        break;
      default:
        break;
    }

    console.log(e.target);
  };
  return <>{newProjectInputs}</>;
};
