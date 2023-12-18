import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  imgURL: String,
  client: String,
  description: String,
  technologies: [String],
  links: {
    github: String,
    website: String,
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
