import { Request, Response } from 'express';
import {container} from 'tsyringe';
import { CreateMenuUseCase } from '../../../use-cases/menu/create-menu.use-case';
import { MenuResponseException } from './menu-response.exceptions';

export class CreateMenuController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, relatedId } = req.body;
    const useCase = container.resolve(CreateMenuUseCase);

    try {
        const { id } = await useCase.execute(name, relatedId );
        return res.status(200).json({ id });
    } catch (error: unknown) {
        return MenuResponseException.resolve(res, error);
    }
  }
}
