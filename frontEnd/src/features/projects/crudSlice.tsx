import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    name: "",
    client: "",
    description: "",
    technologies: [],
    links: {
      github: "",
      website: "",
    },
    imgURL: "",
    currentProject: 0,
  },
  reducers: {
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload.Number;
      state.name = action.payload.Name;
      state.client = action.payload.Client;
      state.description = action.payload.Description;
      state.technologies = action.payload.Technologies;
      state.links = action.payload.Links;
      state.imgURL = action.payload.ImgURL;
      console.log(
        "setcurrentproject: ",
        state.currentProject,
        state.name,
        state.client,
        state.description,
        state.technologies,
        state.links,
        state.imgURL
      );
    },
    setCurrentProjetIndex: (state, action) => {
      state.currentProject = action.payload;
      console.log("setcurrentprojectindex: ", state.currentProject);
    },
    setName: (state, action) => {
      state.name = action.payload;
      console.log("setname: ", state.name);
    },
    setClient: (state, action) => {
      state.client = action.payload;
      console.log("setclient: ", state.client);
    },
    setDescription: (state, action) => {
      state.description = action.payload;
      console.log("setdescription: ", state.description);
    },
    setTechnologies: (state, action) => {
      state.technologies = action.payload;
      console.log("settechnologies: ", state.technologies);
    },
    setLinks: (state, action) => {
      state.links.website = action.payload.website;
      console.log("setlinks: ", state.links.website);
      state.links.github = action.payload.github;
      console.log("setlinks: ", state.links.github);
    },
    setImgURL: (state, action) => {
      state.imgURL = action.payload;
      console.log("setimgurl: ", state.imgURL);
    },
  },
});

export const {
  setName,
  setClient,
  setDescription,
  setTechnologies,
  setLinks,
  setImgURL,
  setCurrentProject,
  setCurrentProjetIndex,
} = crudSlice.actions;
