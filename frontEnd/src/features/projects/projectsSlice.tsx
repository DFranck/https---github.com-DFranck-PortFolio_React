import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {},
  reducers: {
    addProjects: (state, action) => {
      state = action.payload;
      console.log("getProjects", state);
    },
  },
});
