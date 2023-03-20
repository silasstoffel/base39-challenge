import request from 'supertest';
import menuModel from '../../../../../src/infra/database/repositories/menu.schema';
import { app } from '../../../../../src/infra/http/app';

describe("LoadMenuController", () => {

    let responseAssert: any[] = [];

    beforeAll(async () => {
        await menuModel.deleteMany({});

        const brazil = await menuModel.create({
            name: 'Brazil'
        });

        const argentina = await menuModel.create({
            name: 'Argentina'
        });

        const sudeste = await menuModel.create({
            name: 'Sudeste',
            relatedId: brazil._id
        });

        const sp = await menuModel.create({
            name: 'SP',
            relatedId: sudeste._id
        });

        const es = await menuModel.create({
            name: 'ES',
            relatedId: sudeste._id
        });

        const vitoria = await menuModel.create({
            name: 'Vitoria',
            relatedId: es._id
        });

        responseAssert = buildResponseObject(
            brazil._id,
            argentina._id,
            sudeste._id,
            sp._id,
            es._id,
            vitoria._id,
        );

    });

    describe("when there is menu record", () => {
        it('should load a menu', async() => {
            const response = await request(app).get('/api/v1/menu');

            expect(response.status).toBe(200);
            expect(JSON.stringify(response.body)).toBe(JSON.stringify(responseAssert));
        });
    });

    describe("when there is no any menu records", () => {
        it('should return empty response', async() => {
            await menuModel.deleteMany({});

            const response = await request(app).get('/api/v1/menu');

            expect(response.status).toBe(200);
            expect(JSON.stringify(response.body)).toBe(JSON.stringify([]));
        });
    });

});


function buildResponseObject(brazilId: string, argentinaId: string, sudesteId: string, spId: string, esId: string, vitoriaId: string) {
    return [
        {
            id: brazilId,
            name: 'Brazil',
            submenus: [
                {
                    id: sudesteId,
                    name: 'Sudeste',
                    submenus: [
                        {
                            id: spId,
                            name: 'SP'
                        },
                        {
                            id: esId,
                            name: 'ES',
                            submenus: [
                                {
                                    id: vitoriaId,
                                    name: 'Vitoria'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: argentinaId,
            name: 'Argentina'
        }
    ];
}
