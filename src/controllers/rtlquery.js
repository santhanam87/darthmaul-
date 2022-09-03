import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import BusinessItem from '../client/components/business';
import HTMLPage from '../client/pages';
import createStore from '../store';
import yelpAPI from '../store/services/yelp';
/**
 * What I want to achieve ?
 * I want a SSR with graphql and RTK query
 *
 * Why RTK query?
 * It seems more usable to get the fetch using react hooks.
 *
 * GQL Request using graphql-request is working
 *
 * What do I need now ? Redux store with rtl Query
 *
 * Hydrate the react ssr
 *
 * Redux store integration.
 *
 * Store client side hydrating.
 */

const RTLQueryController = async (req, res) => {
    const store = createStore();
    store.dispatch(yelpAPI.endpoints.getBusiness.initiate('garaje-san-francisco'));
    store.dispatch(yelpAPI.endpoints.getSearch.initiate({ term: 'burrito', location: 'san francisco' }));
    // TODO remove the above hack.
    await Promise.all(yelpAPI.util.getRunningOperationPromises());
    const stream = renderToPipeableStream(
        <HTMLPage pageTitle="RTLQuery">
            <Provider store={store}>
                <BusinessItem />
            </Provider>
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

export default RTLQueryController;
