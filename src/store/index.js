import { configureStore } from '@reduxjs/toolkit';
import getYelpMiddleware from './services/yelp';

export default (preloadedState, apiKey, endPoint) => {
    const yelpAPI = getYelpMiddleware(apiKey, endPoint);
    return configureStore({
        reducer: {
            [yelpAPI.reducerPath]: yelpAPI.reducer,
        },
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(yelpAPI.middleware),
    });
};
