import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";


interface ICreateAdministrator {
  name: string;
  username: string;
  email: string;
  password: string;
}


export class CreateAdministratorUseCase {
  async execute({ name, username, email, password } : ICreateAdministrator) {
    const adminExist = await prisma.administrator.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    })

    if (adminExist) {
      throw new Error("Administrator already exists!")
    }

    const hashNumber = parseInt(process.env.HASH_NUMBER as string);

    const hashPassword = await hash(password, hashNumber)
    
    const adm = await prisma.administrator.create({
      data: {
        name,
        username,
        email, 
        password: hashPassword
      }
    })
    return adm;
  }
}