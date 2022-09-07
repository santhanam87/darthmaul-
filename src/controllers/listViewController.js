import fetch from 'cross-fetch';
import React from 'react';
import ListView from '../client/components/listView';
import RenderPage from '../services/renderPage';
import createStore from '../store';
import listViewAPI from '../store/services/listView';

const ListViewController = async (req, res) => {
    const store = createStore();
    try {
        const postData = await fetch('https://api.json-generator.com/templates/BfrahissgAmh/data', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.JSON_GEN_KEY}`,
            },
        });
        const posts = await postData.json();
        posts.forEach((post) => store.dispatch(listViewAPI.endpoints.insertPost.initiate(post)));
    } catch (e) {
        console.info(e);
    }
    await Promise.all(listViewAPI.util.getRunningOperationPromises());
    const RequestComponent = <ListView />;
    RenderPage(RequestComponent, store, res);
};

export default ListViewController;
