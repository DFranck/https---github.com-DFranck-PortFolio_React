import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    currentProject: 0,
  },
  reducers: {
    addProjects: (state, action) => {
      state = action.payload;
      console.log("getProjects", state);
    },
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
      console.log("currentProject", state.currentProject);
    },
  },
});

export const { addProjects, setCurrentProject } = projectsSlice.actions;
