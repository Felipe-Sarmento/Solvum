import { prisma } from "../../../database/prismaClient";


interface ICreateAdministrator {
  name: string;
  username: string;
  email: string;
  password: string;
}


export class CreateAdministratorUseCase {
  async execute({ name, username, email, password } : ICreateAdministrator) {
    const adm = await prisma.administrator.create({
      data: {
        name,
        username,
        email, 
        password
      }
    })
    return adm;
  }
}