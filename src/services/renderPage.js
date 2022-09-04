import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import HTMLPage from '../client/pages';

const RenderPage = (requestComponent, store, res) => {
    const stream = renderToPipeableStream(
        <HTMLPage pageTitle="RTLQuery">
            <Provider store={store}>{requestComponent}</Provider>
        </HTMLPage>,
        {
            onShellReady: async () => {
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
            bootstrapScriptContent: `var INITIAL_STATE = ${JSON.stringify(
                store.getState(),
            )}; var API_KEY=${JSON.stringify(process.env.API_KEY)}; var END_POINT=${JSON.stringify(
                process.env.YELP_ENDPOINT,
            )};`,
        },
    );
};

export default RenderPage;
