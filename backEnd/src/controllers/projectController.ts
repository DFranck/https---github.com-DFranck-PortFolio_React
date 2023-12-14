import Project from "../models/Project";
import { Request, Response } from "express";

export const getProjects = async (req: Request, res: Response) => {
  console.log("Attempting to fetch projects...");
  try {
    const projects = await Project.find();
    console.log("Projects found:", projects);
    res.json(projects);
  } catch (error: unknown) {
    console.error("Error fetching projects:", error);
    res.status(500).send((error as any).message);
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error: unknown) {
    res.status(500).send((error as any).message);
  }
};
