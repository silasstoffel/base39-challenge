import { injectable, } from 'tsyringe';
import { Menu } from '../../../domain/menu/menu.entity';
import { MenuRepositoryInterface } from "../../../domain/menu/menu.repository.interface";
import model, { IMenu } from './menu.schema'

@injectable()
export class MenuRepository implements MenuRepositoryInterface {
    async findByName(name: string): Promise<Menu | null> {
        const menu = await model.findOne( { name } );
        return this.buildMenuInstance(menu);
    }

    async findById(id: string): Promise<Menu | null> {
        const menu = await model.findById(id);
        return this.buildMenuInstance(menu);
    }

    async create(menu: Partial<Menu>): Promise<Menu> {
        const {_id, name, relatedId } = await model.create(menu);
        return new Menu(name, _id, relatedId);
    }

    async loadAll(): Promise<Menu[]> {
        const menus = await model.find();
        return menus.map(
            (item:IMenu) => this.buildMenuInstance(item) as Menu
        );
    }

    private buildMenuInstance(record: IMenu | null): Menu | null {
        if (record) {
            return new Menu(record.name, record._id, record.relatedId);
        }
        return null;
    }

    async delete(id: string): Promise<void> {
        await model.deleteOne({ _id: id });
    }
}
