import { Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import envConfig from "../envConfig";
import { AuthenticatedRequest } from "../types";

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): any => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(
    token,
    envConfig.accessTokenSecret as Secret,
    (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};
