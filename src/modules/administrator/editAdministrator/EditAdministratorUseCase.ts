import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface IEditAdministrator {
  name: string;
  username: string;
  email: string;
  password: string;
}

export class EditAdministratorUseCase {
  async execute({ name, username, email, password } : IEditAdministrator) {
    const existAdmin = await prisma.administrator.findUnique({
      where: {
        username
      }
    })

    if (!existAdmin) {
      throw new Error("Administrator doesn't exist!");
    }

    if (!(password.length  > 7 && password.length < 33)) {
      throw new Error("Senha inválida (crie uma senha de 8 a 32 caracteres")
    }

  const hashNumber = parseInt(process.env.HASH_NUMBER as string);

  const hashPassword = await hash(password, hashNumber)

  const updateAdmin = await prisma.administrator.update({
      where: {
        username
      },
      data: {
        name,
        username,
        email,
        password: hashPassword
      },
    });

    return updateAdmin;
  }
}