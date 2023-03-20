import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteMenuUseCase } from '../../../use-cases/menu/delete-menu.use-case';
import { MenuResponseException } from './menu-response.exceptions';

export class DeleteMenuController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(DeleteMenuUseCase);
    const { id } = req.params;
    try {
        await useCase.execute(id);
        return res.status(200).json();
    } catch (error: unknown) {
        return MenuResponseException.resolve(res, error);
    }
  }
}
