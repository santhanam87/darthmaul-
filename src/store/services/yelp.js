import { createApi } from '@reduxjs/toolkit/query/react';
import { gql, ClientError } from 'graphql-request';
import buildGQLClient from '../../services/gqlclient';
import getPostQuery from '../../query/getPost.graphql';

const graphqlBaseQuery = async ({ body }) => {
    try {
        const graphQLClient = buildGQLClient();
        const data = await graphQLClient.request(body);
        return { data };
    } catch (error) {
        if (error instanceof ClientError) {
            return { error: { status: error.response.status, data: error } };
        }
        return { error: { status: 500, data: error } };
    }
};

const yelpAPI = createApi({
    reducerPath: 'yelpApi',
    baseQuery: graphqlBaseQuery,
    endpoints: (builder) => ({
        getBusiness: builder.query({
            query: (id) => ({
                body: getPostQuery,
            }),
        }),
        getSearch: builder.query({
            query: ({ term, location }) => ({
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
