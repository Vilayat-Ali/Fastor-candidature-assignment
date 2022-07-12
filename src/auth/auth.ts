import { sign } from "jsonwebtoken";

// Access Token
export const generateAccessToken = (
  email: String,
  expirationTimeInHours: number
): string => {
  const user = { email };
  const accessToken = sign(user, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: (expirationTimeInHours * 3600).toString() + "s",
  });
  return accessToken;
};

// Refresh  Token
export const generateRefreshToken = (email: String): String => {
  const user = { email };
  const refreshToken = sign(user, process.env.REFRESH_TOKEN_SECRET!);
  return refreshToken;
};
