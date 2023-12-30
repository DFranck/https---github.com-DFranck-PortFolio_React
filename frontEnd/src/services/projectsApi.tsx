import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export interface Project {
  id: string;
  name: string;
  imgURL: string;
  currentProject: number;
  description: string;
  client: string;
  technologies: [string];
  links: [string];
}
export const projectsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => ({ url: "projects", method: "GET" }),
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
