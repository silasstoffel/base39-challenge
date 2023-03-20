import { injectable, inject } from 'tsyringe';
import { Menu } from '../../domain/menu/menu.entity';
import { MenuRepositoryInterface } from '../../domain/menu/menu.repository.interface';

@injectable()
export class LoadMenuUseCase {
    public constructor(
        @inject("MenuRepository")
        private readonly menuRepository: MenuRepositoryInterface,
    ) {}

    public async execute(): Promise<Menu[]> {
        return this.menuRepository.loadAll();
    }
}
