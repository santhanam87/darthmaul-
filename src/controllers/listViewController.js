import React from 'react';
import RenderPage from '../services/renderPage';
import createStore from '../store';
import listViewAPI from '../store/services/listView';

const ListViewController = async (req, res) => {
    const store = createStore();
    await Promise.all(listViewAPI.util.getRunningOperationPromises());
    const RequestComponent = <p>Hello</p>;
    RenderPage(RequestComponent, store, res);
};

export default ListViewController;
