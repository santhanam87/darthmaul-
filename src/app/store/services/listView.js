import { createApi } from '@reduxjs/toolkit/query/react';
import graphqlBaseQuery from '../../services/gqlclient';
import getPostsQuery from '../../query/getPosts.graphql';
import insertPosts from '../../query/insertPosts.graphql';

const listViewAPI = createApi({
    reducerPath: 'listView',
    baseQuery: graphqlBaseQuery,
    endpoints: (builder) => ({
        insertPost: builder.mutation({
            query: ({ author, description, title }) => ({
                body: insertPosts,
                variables: { author, description, title },
            }),
        }),
        getPosts: builder.query({
            query: () => ({
                body: getPostsQuery,
            }),
        }),
    }),
});

export const { useGetPostsQuery } = listViewAPI;
export default listViewAPI;
