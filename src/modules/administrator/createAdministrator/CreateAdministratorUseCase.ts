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
      const adminExist = await prisma.administrator.findUnique({
        where: {
          username
        }
      })
  
      if (adminExist) {
        throw new Error("Administrator already exists!")
      }
  
      if (!(password.length  > 7 && password.length < 33)) {
        throw new Error("Senha inválida (crie uma senha de 8 a 32 caracteres")
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