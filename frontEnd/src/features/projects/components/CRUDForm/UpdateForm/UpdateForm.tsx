import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../../../app/store";
import { useDispatch } from "react-redux";
import {
  setName,
  setClient,
  setDescription,
  // setTechnologies,
  setLinks,
  setImgURL,
} from "../../../crudSlice";
export const UpdateForm = () => {
  const [addTechnologies, setAddTechnologies] = useState([]);
  const dispatch = useDispatch();
  const isData = useSelector((state: RootState) => state.crud);
  console.log("isData:", isData);

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
  const UpdateForm =
    isData &&
    Object.keys(isData).flatMap((key: string) => {
      const value = isData[key];
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
                  setAddTechnologies([...addTechnologies, "add techno"])
                }
              >
                +
              </button>
            </div>
            <div className="technologies">
              {addTechnologies.map((value: string, index: number) => (
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
    });
  return <>{UpdateForm}</>;
};
