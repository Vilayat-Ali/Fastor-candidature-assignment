// Libraries
import { NextFunction } from "express";
import { verify } from "jsonwebtoken";

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  // extracting token from headers
  const authHeaders = req.headers.get("Authorization");
  const accessToken = authHeaders && authHeaders.split(" ")[1];
  // token not passed
  if (accessToken === null) {
    return res.status(401);
  }
  // token is there
  verify(accessToken, process.env.ACCESS_TOKEN_SECRET!, (err, user) => {
    if (err) return res.status(401);
    //@ts-ignore
    req.user = user;
    next();
  });
};

export default authMiddleware;
