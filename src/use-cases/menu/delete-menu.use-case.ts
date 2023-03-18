import { injectable, inject } from 'tsyringe';
import { Menu } from '../../domain/menu/menu.entity';
import { MenuNotException } from '../../domain/menu/menu.exception';
import { MenuRepositoryInterface } from '../../domain/menu/menu.repository.interface';

@injectable()
export class DeleteMenuUseCase {
    public menus: Menu[] = [];

    public constructor(
        @inject("MenuRepository")
        private readonly menuRepository: MenuRepositoryInterface,
    ) {}

    public async execute(id: string): Promise<void> {
        this.menus = await this.menuRepository.loadAll();
        const menu = this.menus.find(item => item.id === id);

        if (!menu) {
            throw new MenuNotException();
        }

        await this.deleteRecursive(menu);

    }

    private async deleteRecursive(menu: Menu): Promise<void> {
        await this.menuRepository.delete(String(menu.id));

        if (menu.relatedId) {
            const submenus = this.menus.filter(sub => sub.relatedId === menu.id);
            for (const submenu of submenus) {
                await this.deleteRecursive(submenu);
            }
        }
    }
}
