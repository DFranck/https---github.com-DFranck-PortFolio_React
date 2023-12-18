import { Button } from "../../../common/components/Button/Button";
import { CreateProjetsInputs } from "./CreateProjetsInputs";
import { useState } from "react";
import "./CRUDform.scss";
import { UpdateForm } from "./UpdateForm";
export const CRUDform = () => {
  const [requestType, setRequestType] = useState("create");
  const [formInputs, setFormInputs] = useState(<CreateProjetsInputs />);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit", requestType);
  };

  const handleForm = (type?: string) => {
    switch (type) {
      case "create":
        setFormInputs(<CreateProjetsInputs />);
        setRequestType("create");
        console.log("create-interface");
        break;
      case "update":
        setFormInputs(<UpdateForm />);
        setRequestType("update");
        console.log("update-interface");
        break;
      case "delete":
        setFormInputs(<></>);
        setRequestType("delete");
        console.log("delete-interface");
        break;
    }
  };
  const getCurrentForm = (btn: string) => {
    return requestType === btn ? "current-form" : "";
  };
  return (
    <section className="form-container">
      <div className="CRUD-buttons">
        <Button
          className={getCurrentForm("create")}
          text="create"
          onClick={() => handleForm("create")}
        />
        <Button
          className={getCurrentForm("update")}
          text="update"
          onClick={() => handleForm("update")}
        />
        <Button
          className={getCurrentForm("delete")}
          text="delete"
          onClick={() => handleForm("delete")}
        />
      </div>
      <form onSubmit={(e) => submitForm(e)}>
        {formInputs}
        <input type="submit" className="submit" />
      </form>
    </section>
  );
};
