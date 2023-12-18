const models = {
  project: {
    name: String,
    client: String,
    description: String,
    technologies: [String],
    links: {
      github: String,
      website: String,
    },
    imgURL: String,
  },

  users: "users",
};

export default models;
