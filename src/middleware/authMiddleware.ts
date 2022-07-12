// Libraries
import { NextFunction } from "express";
import { verify } from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // extracting token from headers
  const authHeaders = req.headers.get("Authorization");
  const accessToken = authHeaders && authHeaders.split(" ")[1];
  // token not passed
  if (accessToken === null) {
    return res.sendStatus(401);
  }
  // token is there
  else {
    verify(accessToken, process.env.ACCESS_TOKEN_SECRET!, (err, user) => {
      if (err) return res.sendStatus(401);
      res.locals.user = user;
      next();
    });
  }
};

export default authMiddleware;
