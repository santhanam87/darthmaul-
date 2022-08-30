import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter.slice';

export default (preloadedState, { gqlClient }) =>
    configureStore({
        reducer: {
            counter,
        },
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument: { gqlClient } } }),
    });
