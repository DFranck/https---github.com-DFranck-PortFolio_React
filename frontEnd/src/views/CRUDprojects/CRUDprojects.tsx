import { CRUDpreview } from "../../common/components/CRUDpreview/CRUDpreview";
import { Hero } from "../../common/components/Hero/Hero";
import { CRUDform } from "../../features/projects/components/CRUDForm/CRUDform";
import "./CRUDprojects.scss";
export const CRUDProjects = () => {
  return (
    <main className="CRUD-projects">
      <Hero />
      <CRUDform />
      <section className="preview-container">
        <CRUDpreview />
      </section>
    </main>
  );
};
