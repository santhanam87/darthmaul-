import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import UserPage from '../client/pages/userPage';
import { devLogger } from '../services/logger';
import createStore from '../store';
import yelpApi from '../store/services/yelp';

const UserController = async (req, res) => {
    devLogger(req.url);
    const { gqlClient } = req;
    const defaultValue = {};
    const store = createStore(defaultValue, { gqlClient });
    console.info(process.env.API_KEY);
    store.dispatch(yelpApi.endpoints.getBusiness.initiate());
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
                res.send('<!doctype html><p>Loading...</p><script src="clientrender.js"></script>');
            },
            onError(err) {
                devLogger(err);
            },
            bootstrapScriptContent: `var defaultValue = ${JSON.stringify({
                ...store.getState(),
            })}`,
        },
    );
};

export default UserController;
