
import { Response } from "express";
import { InvalidRelatedMenuException, MenuAlreadyExistsException, MenuNotException, MenuRequiredParameterException } from '../../../domain/menu/menu.exception';

export class MenuResponseException {
    public static resolve(res: Response, error: unknown): Response {

        if (error instanceof MenuAlreadyExistsException) {
            const { code, message } = error;
            return res.status(409).json({ code, message });
        }

        if (error instanceof InvalidRelatedMenuException) {
            const { code, message } = error;
            return res.status(422).json({ code, message });
        }

        if (error instanceof MenuRequiredParameterException) {
            const { code, message } = error;
            return res.status(400).json({ code, message });
        }

        if (error instanceof MenuNotException) {
            const { code, message } = error;
            return res.status(404).json({ code, message });
        }

        let detail = undefined;
        let stack = undefined;

        if (process.env.ENVIRONMENT === 'development') {
            const exc = error as Error;
            detail = exc.message;
            stack = exc.stack;
        }

        return res.status(500).json({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal server error.',
            detail,
            stack
        });
    }
}
