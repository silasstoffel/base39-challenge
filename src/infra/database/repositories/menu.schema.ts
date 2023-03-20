import { model, Schema } from 'mongoose';

export interface IMenu {
    _id?: string,
    name: string,
    relatedId: string,
    createdAt?: Date,
}

interface IAutoIncrement {
    _id: string,
    seq: number
}

// Mongo does not support auto increment, this is way to work with auto increment
const counterSchema = new Schema<IAutoIncrement>({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const counterModel = model<IAutoIncrement>('counter', counterSchema, 'counters');

const menuSchema = new Schema<IMenu>({
    _id: { type: String, required: false },
    name: { type: String, required: true },
    relatedId: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});


menuSchema.pre<IMenu>('save', async function(next) {
    const menu = await counterModel.findById('menuId');
    let nextId = 1;
    if (!menu) {
        await counterModel.create({ _id: 'menuId', seq: nextId });
    } else {
        nextId = Number(menu.seq) + 1;
        await counterModel.updateOne(
            { _id: 'menuId' },
            { seq: nextId }
        );
    }
    this._id = String(nextId);
    next();
});

export default model<IMenu>('menu', menuSchema, 'menus');
