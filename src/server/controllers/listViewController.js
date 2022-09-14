import React from 'react';

import RenderPage from '../../app/services/renderPage';
import ListView from '../../client/components/listView';
import listViewAPI from '../../app/store/services/listView';
import createStore from '../../app/store';

const ListViewController = async (req, res) => {
    const store = createStore();
    store.dispatch(listViewAPI.endpoints.getPosts.initiate());
    await Promise.all(listViewAPI.util.getRunningOperationPromises());
    const RequestComponent = <ListView />;
    RenderPage(RequestComponent, store, req, res);
};

export default ListViewController;
