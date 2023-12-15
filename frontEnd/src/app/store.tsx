import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { projectsApi } from "../services/projectsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectsSlice } from "../features/projects/projectsSlice";

export const store = configureStore({
  reducer: combineReducers({
    projects: projectsSlice.reducer,
    [projectsApi.reducerPath]: projectsApi.reducer,
  }),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(projectsApi.middleware);
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
