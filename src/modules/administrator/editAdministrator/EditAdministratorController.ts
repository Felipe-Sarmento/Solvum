
import { Request, Response } from "express";
import { EditAdministratorUseCase } from "./EditAdministratorUseCase";

export class EditAdministratorController {
  async handle(request: Request, response: Response) {
    const { name, username, email, password } = request.body;

    const editAdministratorUseCase = new EditAdministratorUseCase();
    
    const adm = await editAdministratorUseCase.execute({
      name,
      username,
      email, 
      password
    });

    return response.json(adm);
   }
}