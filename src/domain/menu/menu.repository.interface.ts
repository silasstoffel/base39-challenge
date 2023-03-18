import { Menu } from "./menu.entity";

export interface MenuRepositoryInterface {
    create(menu: Partial<Menu>): Promise<Menu>;

    findByName(name: string): Promise<Menu | null>;

    findById(id: string): Promise<Menu | null>;

    loadAll(): Promise<Menu[]>

    delete(id: string): Promise<void>;
}
