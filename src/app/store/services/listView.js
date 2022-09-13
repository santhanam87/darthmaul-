import { createApi } from '@reduxjs/toolkit/query/react';
import graphqlBaseQuery from '../../services/gqlclient';

const listViewAPI = createApi({
    reducerPath: 'listView',
    baseQuery: graphqlBaseQuery,
    endpoints: () => ({}),
});

export const { useGetBusinessQuery, useGetSearchQuery } = listViewAPI;
export default listViewAPI;
