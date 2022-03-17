import { AuthenticateAdministratorUseCase } from "./AuthenticateAdministratorUseCase";
import { Request, Response } from "express";


export class AuthenticateAdministratorController {
  async handle (request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthenticateAdministratorUseCase();
    const result = await authenticateClientUseCase.execute({
      username,
      password
    })

    return response.json(result) 
  }
}