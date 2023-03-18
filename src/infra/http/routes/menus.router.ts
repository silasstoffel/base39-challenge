import { Router } from 'express';
import { CreateMenuController } from '../controllers/create-menu.controller';
import { DeleteMenuController } from '../controllers/delete-menu.controller';
import { LoadMenuController } from '../controllers/load-menu.controller';

const menuRoute = Router();
const createController = new CreateMenuController();
const loadController = new LoadMenuController();
const deleteController = new DeleteMenuController();

menuRoute.post("/", createController.handle);
menuRoute.get("/", loadController.handle);
menuRoute.get("/:id", deleteController.handle);

export { menuRoute }
