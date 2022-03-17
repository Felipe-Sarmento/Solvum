
import { Request, Response } from "express";
import { CreateAdministratorUseCase } from "./CreateAdministratorUseCase";

export class CreateAdministratorController {
  async handle(request: Request, response: Response) {
    const { name, username, email, password } = request.body;

    const createAdministratorUseCase = new CreateAdministratorUseCase();
    
    const adm = await createAdministratorUseCase.execute({
      name,
      username,
      email, 
      password
    });

    return response.json(adm);
   }
}