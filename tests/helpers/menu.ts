import request from 'supertest';
import { app } from '../../src/infra/http/app'



export async function createMenu(name: string, relatedId?: string) {
    return request(app)
    .post('/api/v1/menu')
    .send({ name, relatedId });
};
