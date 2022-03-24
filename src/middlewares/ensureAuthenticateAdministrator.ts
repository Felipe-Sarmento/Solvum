import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateAdministrator(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: "Token missing",
    });
  }

  const [ ,token] = authHeader.split(" ");

  const hash = process.env.ADMIN_HASH as string;

  try {
    const { sub } = verify(token, hash) as IPayload;

    console.log(sub);

    return next();
  }

  catch(err) {
    return response.status(401).json({
      message: "Invalid token",
    });
  }
}