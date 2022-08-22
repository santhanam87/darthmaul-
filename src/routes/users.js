import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { devLogger } from '../services';
import App from './naming';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
	devLogger(req.url);
	const props = { inputName: 'shravan' };
	const stream = renderToPipeableStream(<App {...props} />, {
		onShellReady() {
			res.statusCode = 200;
			res.setHeader('Content-type', 'text/html');
			stream.pipe(res);
		},
		onShellError() {
			res.statusCode = 500;
			res.send(
				'<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
			);
		},
		onError(err) {
			devLogger(err);
		},
		bootstrapScriptContent: `var props = ${JSON.stringify(props)}`,
	});
});

export default userRouter;
