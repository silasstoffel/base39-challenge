import request from 'supertest';
import menuModel, { IMenu } from '../../../../../src/infra/database/repositories/menu.schema';
import { app } from '../../../../../src/infra/http/app';

describe.only("DeleteMenuController", () => {
    let brazil: IMenu;

    beforeAll(async () => {
        await menuModel.deleteMany({});
        brazil = await menuModel.create({ name: 'Brazil' });
        const sudeste = await menuModel.create({ name: 'Sudeste', relatedId: brazil._id });
        await menuModel.create({ name: 'SP', relatedId: sudeste._id });

        await menuModel.create({ name: 'Argentina' });
    });

    describe("when is possible delete a menu", () => {
        it('should return status code as success', async() => {
            const response = await request(app).get(`/api/v1/menu/${brazil._id}`);
            expect(response.status).toBe(200);
        });

        it('should keep on database only one menu', async() => {
            const response = await request(app).get(`/api/v1/menu`);
            expect(response.status).toBe(200);
            expect(response.body.length).toBe(1);
        });
    });

    describe("when is impossible delete a menu", () => {
        it('should return error', async() => {
            const response = await request(app).get(`/api/v1/menu/-99`);
            expect(response.status).toBe(404);
            expect(response.body).toHaveProperty('code', 'MENU_NOT_FOUND');
            expect(response.body).toHaveProperty('message', 'Menu not found.');
        });
    });
});
