import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter.slice';

export default (preloadedState) =>
	configureStore({
		reducer: {
			counter,
		},
		preloadedState,
	});
