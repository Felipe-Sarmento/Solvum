import { Router } from "express";

import { CreateAdministratorController } from "./modules/administrator/createAdministrator/CreateAdministratorController";
import { AuthenticateAdministratorController } from "./modules/administrator/authenticateAdministrator/AuthenticateAdministratorController";
import { EditAdministratorController } from "./modules/administrator/editAdministrator/EditAdministratorController";

import { ensureAuthenticateAdministrator } from "./middlewares/ensureAuthenticateAdministrator";

const routes = Router();

const createAdministratorController = new CreateAdministratorController();
const authenticateAdministratorController = new AuthenticateAdministratorController();
const editAdministratorController = new EditAdministratorController();

routes.post("/administrator", createAdministratorController.handle);

routes.post("/administrator/login", authenticateAdministratorController.handle);

routes.post("/administrator/edit", ensureAuthenticateAdministrator, editAdministratorController.handle)

export { routes };