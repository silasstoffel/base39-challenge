import { Menu } from '../domain/menu/menu.entity';

export interface MenuItem {
    id: string;
    name: string;
    submenus?: MenuItem[] | undefined;
}

export class MenuPresenter {
    private menus!: Menu[];

    public presenter(menus: Menu[]): MenuItem[]  {
        this.menus = menus;

        const rootMenus = this.menus.filter(item => !item.relatedId);
        const fullMenus = rootMenus.map(menu => {
            return this.buildMenuItem(menu);
        });

        return fullMenus;

    }

    private buildSubMenus(rootMenu: Menu): MenuItem[] | undefined {
        const childrenMenus = this.menus.filter(item => item.relatedId === rootMenu.id);

        if (childrenMenus.length) {
            return childrenMenus.map((item: Menu) => this.buildMenuItem(item));
        }

        return undefined;
    }

    private buildMenuItem(menu: Menu): MenuItem {
        const submenus = this.buildSubMenus(menu) ?? undefined;
        return { id: String(menu.id), name: menu.name, submenus };
    }
}
