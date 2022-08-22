import supertest from 'supertest';
import apiApp from '../bootstrap';

describe('ConcurentRoute', () => {
	it('should return 200 status when /concurrent route is pinged', async () => {
		const response = await supertest(apiApp).get('/concurrent');
		expect(response.statusCode).toBe(200);
	});
});
