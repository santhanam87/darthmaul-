import React from 'react';

import RenderPage from '../../app/services/renderPage';
import ListView from '../../client/components/listView';
import listViewAPI from '../../app/store/services/listView';
import createStore from '../../app/store';
// import getRandomData from '../../app/services/getRandomData';

const ListViewController = async (req, res) => {
    const store = createStore();
    /**
     * To fetch random data from the generator uncomment the below line.
     * Todo: Make it more generic.
     */
    // const posts = await getRandomData();
    // store.dispatch(listViewAPI.endpoints.insertPost.initiate(posts[0]));

    await Promise.all(listViewAPI.util.getRunningOperationPromises());
    const RequestComponent = <ListView />;
    RenderPage(RequestComponent, store, req, res);
};

export default ListViewController;
