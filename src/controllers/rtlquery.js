import { renderToPipeableStream } from 'react-dom/server';
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import BusinessItem from '../client/components/business';
import HTMLPage from '../client/pages';
import getYelpMiddleware from '../store/services/yelp';
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
 * Redux store integration
 */

const RTLQueryController = async (req, res) => {
    const yelpAPI = getYelpMiddleware(process.env.API_KEY, process.env.YELP_ENDPOINT);
    const store = configureStore({
        reducer: {
            [yelpAPI.reducerPath]: yelpAPI.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(yelpAPI.middleware),
    });
    const { data } = await store.dispatch(yelpAPI.endpoints.getBusiness.initiate('garaje-san-francisco'));
    console.info(data);
    const name = 'Business Name';
    const stream = renderToPipeableStream(
        <HTMLPage pageTitle="RTLQuery">
            <BusinessItem name={name} />
        </HTMLPage>,
        {
            onShellReady() {
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                stream.pipe(res);
            },
            bootstrapScriptContent: `var API_KEY=${JSON.stringify(process.env.API_KEY)}; var END_POINT=${JSON.stringify(
                process.env.YELP_ENDPOINT,
            )};`,
        },
    );
};

export default RTLQueryController;
