import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import createStore from '../store';
import AppName from './components/name/name';

const rootNode = document.getElementById('root');
ReactDOM.hydrateRoot(
	rootNode,
	<Provider store={createStore(window.defaultValue)}>
		<AppName />
	</Provider>
);
