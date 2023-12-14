import express from "express";
import projectRoutes from "./routes/projectRoutes";
import cors from "cors";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", projectRoutes);

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).send("Internal Server Error");
});

const dbUri: string = process.env.DB_URI!;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Could not connect to the database:", err);
    process.exit(1);
  });
