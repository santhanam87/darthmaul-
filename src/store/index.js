import { configureStore } from '@reduxjs/toolkit';
import listViewAPI from './services/listView';

export default (preloadedState = {}) =>
    configureStore({
        reducer: {
            [listViewAPI.reducerPath]: listViewAPI.reducer,
        },
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listViewAPI.middleware),
    });
