import { container } from "tsyringe";
import { CreateMenuUseCase } from "../../use-cases/menu/create-menu.use-case";
import { DeleteMenuUseCase } from "../../use-cases/menu/delete-menu.use-case";
import { LoadMenuUseCase } from "../../use-cases/menu/load-menu.use-case";


container.register<CreateMenuUseCase>(CreateMenuUseCase, CreateMenuUseCase);
container.register<LoadMenuUseCase>(LoadMenuUseCase, LoadMenuUseCase);
container.register<DeleteMenuUseCase>(DeleteMenuUseCase, DeleteMenuUseCase);
