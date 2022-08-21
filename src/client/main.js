import React from 'react';
import ReactDOM from 'react-dom/client';
import AppName from './components/name/name';

const rootNode = document.getElementById('root');
ReactDOM.hydrateRoot(rootNode, <AppName inputName={window.props.inputName} />);
