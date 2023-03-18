import { injectable, inject } from 'tsyringe';
import { InvalidRelatedMenuException, MenuAlreadyExistsException, MenuRequiredParameterException } from '../../domain/menu/menu.exception';
import { Menu } from '../../domain/menu/menu.entity';
import { MenuRepositoryInterface } from '../../domain/menu/menu.repository.interface';

@injectable()
export class CreateMenuUseCase {
    public constructor(
        @inject("MenuRepository")
        private readonly menuRepository: MenuRepositoryInterface,
    ) {}

    public async execute(name: string, relatedId?: string): Promise<Menu> {
        if (!name) {
            throw new MenuRequiredParameterException();
        }

        let record = await this.menuRepository.findByName(name);

        if (record && record.relatedId === relatedId) {
            throw new MenuAlreadyExistsException();
        }

        if (relatedId && !(await this.menuRepository.findById(relatedId))) {
            throw new InvalidRelatedMenuException();
        }

        return this.menuRepository.create({ name, relatedId });
    }
}
