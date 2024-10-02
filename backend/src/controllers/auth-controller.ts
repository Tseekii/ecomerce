// MONGOOSE => ODM => Object Data Mapping
import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export const login = (req: Request, res: Response) => {
//   res.status(200).json({ message: "Login success" });
// };

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй." });
    }
    const createdUser = await User.create({
      firstname,
      lastname,
      email,
      password,
    });

    res.status(201).json({ message: "create user is sucessfull" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Бүртгэлтэй хэрэглэгч олдсонгүй" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password.toString());
      if (!isCheck) {
        return res.status(400).json({
          message: "Хэрэглэгчийн имэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "1h",
        });
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQxMGJkZDMxLTY1OTQtNGY3OS1hNmM4LTEyYjk5ODcwMmExOCIsImlhdCI6MTcyNTg1MDIyMSwiZXhwIjoxNzI1ODUzODIxfQ.eFBoADSc6PANPmHk78_jH8WtabE3DliG4KQp18HsUaM
        res.status(200).json({
          message: "success",
          token,
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: "Client error garlaa" });
  }
};
