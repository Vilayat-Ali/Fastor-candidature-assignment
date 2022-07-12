// Libraries
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // extracting token from headers
  const authHeader = req.headers.authorization;
  const accessToken = authHeader && authHeader?.split(" ")[1];
  // token not passed
  if (!accessToken) {
    return res.sendStatus(401);
  }
  // token is there
  else {
    verify(
      accessToken[1],
      process.env.ACCESS_TOKEN_SECRET!,
      (err: any, user: any) => {
        if (err) return res.sendStatus(401);
        res.locals.user = user;
        next();
      }
    );
  }
};

export default authMiddleware;
