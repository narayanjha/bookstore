import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ENV } from "../../config/env.ts";

export interface AuthRequest extends Request {
  user?: any;
}

export const auth = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: "No token" });

  const decoded = jwt.verify(token, ENV.JWT_SECRET);
  req.user = decoded;

  next();
};