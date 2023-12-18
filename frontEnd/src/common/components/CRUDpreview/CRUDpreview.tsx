import { useSelector } from "react-redux";
import "./CRUDpreview.scss";
import { RootState } from "../../../app/store";
export const CRUDpreview = () => {
  const crudData = useSelector((state: RootState) => state.crud);

  const formatedData = useSelector(
    (state: RootState) => state.api.queries["getProjects({})"]?.data
  );
  return formatedData && crudData.currentProject >= 0 ? (
    <article>
      <figure>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/${crudData.imgURL}`}
          alt=""
        />
        <figcaption>
          <h2>{crudData.name}</h2>
          <pre>
            <code>{crudData.description}</code>
          </pre>
          <div className="lists">
            <ul className="technologies">
              {crudData.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <ul className="links">
              {crudData.links.website && (
                <li>
                  <a
                    href={crudData.links.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </li>
              )}
              {crudData.links.github && (
                <li>
                  <a
                    href={crudData.links.github}
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
    </article>
  ) : (
    <p>"Reload the page"</p>
  );
};
