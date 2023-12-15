import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({ url: "projects", method: "GET" }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
