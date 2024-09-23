import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login success" });
};
export const signup = (req: Request, res: Response) => {
  res.status(200).json({ message: "sign success" });
};
