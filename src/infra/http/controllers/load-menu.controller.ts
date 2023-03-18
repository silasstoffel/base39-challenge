import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { MenuPresenter } from '../../../presenter/menu.presenter';
import { LoadMenuUseCase } from '../../../use-cases/menu/load-menu.use-case';
import { MenuResponseException } from './menu-response.exceptions';

export class LoadMenuController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(LoadMenuUseCase);

    try {
        const menus = await useCase.execute();
        const menuPresenter = new MenuPresenter();

        return res.status(200).json(menuPresenter.presenter(menus));
    } catch (error: unknown) {
        return MenuResponseException.resolve(res, error);
    }
  }
}
