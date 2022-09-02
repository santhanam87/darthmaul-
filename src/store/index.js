import { configureStore } from '@reduxjs/toolkit';
import yelpAPI from './services/yelp';

export default (preloadedState = {}) =>
    configureStore({
        reducer: {
            [yelpAPI.reducerPath]: yelpAPI.reducer,
        },
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(yelpAPI.middleware),
    });
