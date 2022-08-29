import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import UserPage from '../client/pages/userPage';
import { devLogger } from '../services/logger';
import createStore from '../store';

const UserController = (req, res) => {
	devLogger(req.url);
	console.info(req.gqlClient);
	const defaultValue = { counter: { value: 20 } };
	const store = createStore(defaultValue);
	const stream = renderToPipeableStream(
		<Provider store={store}>
			<UserPage />
		</Provider>,
		{
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
			bootstrapScriptContent: `var defaultValue = ${JSON.stringify({
				...store.getState(),
			})}`,
		}
	);
};

export default UserController;
