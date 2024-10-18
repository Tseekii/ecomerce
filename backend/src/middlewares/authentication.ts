import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt";

interface IMyRequest extends Request {
  //ImyReguiest udamshuulj avsan interfeis eer dotot ni bgaa
  user: string | object;
}

import { decodeToken } from "../utils/jwt";
export const authentication = (
  req: IMyRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Та энэ үйдлийг хийхийн тулд нэвтэрнэ үү" });
  }

  const token = req.headers.authorization.split(" ")[1];
  const user = decodeToken(token);
  req.user = user;
  next();
};
