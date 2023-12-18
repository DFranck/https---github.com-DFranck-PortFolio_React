import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { projectsApi } from "../services/projectsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { crudSlice } from "../features/CRUDfrom/crudSlice";

export const store = configureStore({
  reducer: combineReducers({
    [projectsApi.reducerPath]: projectsApi.reducer,
    crud: crudSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(projectsApi.middleware);
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
