import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../app/store";
import {
  setName,
  setClient,
  setDescription,
  // setTechnologies,
  setLinks,
  setImgURL,
} from "../crudSlice";
import { useDispatch } from "react-redux";
export const UpdateForm = () => {
  const dispatch = useDispatch();
  const crudData = useSelector((state: RootState) => state.crud);
  const projectsData = useSelector(
    (state: RootState) => state.api.queries["getProjects({})"]?.data
  );
  const [technologies, setTechnologies] = useState(
    projectsData[crudData.currentProject].technologies
  );
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
      // case "technologies":
      //   dispatch(setTechnologies(e.target.value));
      //   break;
      case "links":
        dispatch(setLinks(e.target.value));
        break;
      case "imgURL":
        dispatch(setImgURL(e.target.value));
        break;
      default:
        break;
    }
    console.log(e.target.value);
  };
  const UpdateForm = Object.keys(projectsData[crudData.currentProject]).flatMap(
    (key: string) => {
      const value = projectsData[crudData.currentProject][key];
      if (key === "description") {
        return (
          <>
            <label key={"label" + key} htmlFor={key}>
              {key.toUpperCase()}
            </label>
            <textarea
              key={"textarea" + key}
              id={key}
              defaultValue={value}
              onChange={(e) => handleInputChange(e)}
            />
          </>
        );
      } else if (key === "links") {
        return Object.keys(value).map((linkKey) => {
          return (
            <>
              <label key={"label" + linkKey} htmlFor={linkKey}>
                {linkKey.toUpperCase()}
              </label>
              <input
                key={"input" + linkKey}
                id={linkKey}
                defaultValue={value[linkKey]}
                onChange={(e) => handleInputChange(e)}
              />
            </>
          );
        });
      } else if (key === "technologies") {
        return (
          <>
            <div className="technologies-label">
              <label key={"label" + key} htmlFor={key}>
                {key.toUpperCase()}
              </label>
              <button
                className="add-technologies"
                type="button"
                onClick={() =>
                  setTechnologies([...technologies, "add technologies"])
                }
              >
                +
              </button>
            </div>
            <div className="technologies">
              {technologies.map((value: string, index: number) => (
                <input
                  key={"input" + index}
                  id={"tech" + index}
                  defaultValue={value}
                  onChange={(e) => handleInputChange(e)}
                />
              ))}
            </div>
          </>
        );
      } else {
        return (
          <>
            <label key={"label" + key} htmlFor={key}>
              {key.toUpperCase()}
            </label>
            <input
              key={"input" + key}
              id={key}
              defaultValue={value}
              onChange={(e) => handleInputChange(e)}
            />
          </>
        );
      }
    }
  );
  // const sortUpdateForm = (UpdateForm) => {
  //   const sortArray = [7, 5, 3, 4, 6, 1, 2];
  //   const SortUpdateForm = UpdateForm.sort(
  //     (a, b) => sortArray.indexOf(a) - sortArray.indexOf(b)
  //   );
  //   return SortUpdateForm;
  // };
  // sortUpdateForm(UpdateForm);
  return <>{UpdateForm}</>;
};
