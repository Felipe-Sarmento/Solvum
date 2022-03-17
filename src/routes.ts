import { Router } from "express";

import { CreateAdministratorController } from "./modules/administrator/createAdministrator/CreateAdministratorController";

const routes = Router();

const createAdministratorController = new CreateAdministratorController();

routes.post("/administrator", createAdministratorController.handle);

export { routes };