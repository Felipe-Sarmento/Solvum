import { Router } from "express";

import { CreateAdministratorController } from "./modules/administrator/createAdministrator/CreateAdministratorController";
import { AuthenticateAdministratorController } from "./modules/administrator/authenticateAdministrator/AuthenticateAdministratorController";

const routes = Router();

const createAdministratorController = new CreateAdministratorController();
const authenticateAdministratorController = new AuthenticateAdministratorController();

routes.post("/administrator", createAdministratorController.handle);

routes.post("/administrator/login", authenticateAdministratorController.handle);

export { routes };