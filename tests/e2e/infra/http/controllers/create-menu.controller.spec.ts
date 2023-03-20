import menuModel from '../../../../../src/infra/database/repositories/menu.schema';
import { createMenu } from '../../../../helpers/menu';

describe("CreateMenuController", () => {

    beforeAll(async () => {
        await menuModel.deleteMany({});
    });

    describe("when should be able to create menu", () => {
        it('should create a new menu', async() => {
            const response = await createMenu('Home');
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('id');
        });
    });

    describe("when should not be able to create menu", () => {


        describe("when name parameter is empty", () => {
            it('should return response with details', async() => {
                const response = await createMenu('');
                expect(response.status).toBe(400);
                expect(response.body).toHaveProperty('code', 'MENU_REQUIRED_PARAMETER');
            });
        });

        describe("when relatedId doest not exists", () => {
            it('should return response with details', async() => {
                const response = await createMenu('menu-without-valid-related-menu', '9999999999');
                expect(response.status).toBe(422);
                expect(response.body).toHaveProperty('code', 'INVALID_RELATED_MENU');
            });
        });

        describe("when menu name is duplicated", () => {
            it('should return response with details', async() => {
                const name = 'first-menu-test';
                await createMenu(name);
                const response = await createMenu(name);

                expect(response.status).toBe(409);
                expect(response.body).toHaveProperty('code', 'MENU_ALREADY_EXISTS');
            });
        });
    });
});
