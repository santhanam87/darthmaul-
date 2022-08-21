import express from 'express';
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { devLogger } from '../services';
import App from './naming';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
	devLogger(req.url);
	devLogger(req.body);
	const props = { inputName: 'santhanam' };
	res.send(ReactDomServer.renderToString(<App {...props} />));
});

export default userRouter;
