import User from "../models/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt"; // Importe bcrypt pour le hashage de mot de passe.
export const createUser = async (req: Request, res: Response) => {
  try {
    if (!req.body.password) {
      return res.status(400).send("Password is required");
    }
    const { password, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...userData,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error: unknown) {
    res.status(500).send((error as any).message);
  }
};
