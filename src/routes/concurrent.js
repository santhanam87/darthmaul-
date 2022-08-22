import express from 'express';

const concurentRouter = express.Router();

concurentRouter.get('/', (_, res) => {
	res.statusCode = 200;
	res.send({});
});

export default concurentRouter;
