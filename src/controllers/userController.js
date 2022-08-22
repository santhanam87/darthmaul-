import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import UserPage from '../client/pages/userPage';
import { devLogger } from '../services';

const UserController = (req, res) => {
	devLogger(req.url);
	const props = { inputName: 'santhanam elumalai' };
	const stream = renderToPipeableStream(<UserPage {...props} />, {
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
};

export default UserController;
