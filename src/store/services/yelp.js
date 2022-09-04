import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import graphqlBaseQuery from '../../services/gqlclient';
import getPostQuery from '../../query/getPost.graphql';

const yelpAPI = createApi({
    reducerPath: 'yelpApi',
    baseQuery: graphqlBaseQuery,
    endpoints: (builder) => ({
        getBusiness: builder.query({
            query: () => ({
                body: getPostQuery,
            }),
        }),
        getSearch: builder.query({
            query: () => ({
                body: gql`
                    query MyQuery {
                        posts {
                            author
                            description
                            id
                            title
                        }
                    }
                `,
            }),
        }),
    }),
});

export const { useGetBusinessQuery, useGetSearchQuery } = yelpAPI;
export default yelpAPI;
