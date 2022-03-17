import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateAdministrator {
  username: string;
  password: string;
}

export class AuthenticateAdministratorUseCase {
  async execute({username, password}: IAuthenticateAdministrator) {


    const administrator = await prisma.administrator.findFirst({
      where: {
        username
      }
    })
    
    if(!administrator) {
      throw new Error("Administrator not found");
    }

    const passwordMatch = await compare(password, administrator.password);

    if(!passwordMatch) {
      throw new Error("Username or password mismatch");
    }

    const hash = process.env.ADMIN_HASH as string;

    const token = sign({ username }, hash, {subject: administrator.id,
    expiresIn: "1d"});

    return token;
  }
}