import React from 'react';
import ReactDOM from 'react-dom/client';
import BusinessItem from './components/business';

const rootNode = document.getElementById('root');
ReactDOM.hydrateRoot(rootNode, <BusinessItem name="Business Name" />);
