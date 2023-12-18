import mongoose from "mongoose";
import Project from "../models/project";
mongoose.connect("mongodb://127.0.0.1:27017/portfolioReact");
mongoose.set("debug", true);
interface OldProject {
  titre?: string;
  image?: string;
  formation?: string;
  skills?: string[];
  lienGitHub?: string;
  lienProjet?: string;
  [key: string]: any;
}
async function migrate() {
  const projects = await Project.find().lean<OldProject[]>();
  console.log("Nombre de projets récupérés:", projects.length);
  for (const project of projects) {
    // const updatedProject = {
    //   name: project.titre || project.name,
    //   imgURL: project.image || project.imgURL,
    //   client: project.formation || project.client,
    //   description: project.description,
    //   technologies: project.technologies || project.skills,
    //   links: {
    //     github: project.lienGitHub || project.links?.github,
    //     website: project.lienProjet || project.links?.website,
    //   },
    // };
    // const deleteOldQuery = {
    //   titre: "",
    //   image: "",
    //   formation: "",
    //   lienGitHub: "",
    //   lienProjet: "",
    // };
    try {
      const updated = await Project.findByIdAndUpdate(
        project._id,
        // { $set: updatedProject },
        {
          $unset: {
            titre: "",
            image: "",
            formation: "",
            lienGitHub: "",
            lienProjet: "",
          },
        },
        { new: true }
      );
      console.log("Projet mis à jour:", updated);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet:", error);
    }
  }

  console.log("Migration terminée");
  mongoose.disconnect();
}

migrate();

//tsc src/scripts/migrate.ts
//node src/scripts/migrate.js
