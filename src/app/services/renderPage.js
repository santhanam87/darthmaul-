import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import HTMLPage from '../../server/pages';

const RenderPage = (requestComponent, store, req, res) => {
    const {
        routeInfo: { pageTitle, scriptName },
    } = req;
    const stream = renderToPipeableStream(
        <HTMLPage pageTitle={pageTitle} scriptName={scriptName}>
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
                process.env.HASURA_ENDPOINT,
            )};`,
        },
    );
};

export default RenderPage;
