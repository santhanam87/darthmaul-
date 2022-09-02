import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';
import { gql, ClientError } from 'graphql-request';
import buildGQLClient from '../../services/gqlclient';

const createApi = buildCreateApi(coreModule(), reactHooksModule({ unstable__sideEffectsInRender: true }));

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
                body: gql`
                        query {
                            business(id: "${id}") {
                                name
                                id
                                alias
                                rating
                                url
                            }
                        }
                    `,
            }),
        }),
        getSearch: builder.query({
            query: ({ term, location }) => ({
                body: gql`
                        query {
                            search(term: "${term}", location:"${location}") {
                                total
                                business {
                                    name
                                    url
                                }
                            }
                        }
                    `,
            }),
        }),
    }),
});

export const { useGetBusinessQuery, useGetSearchQuery } = yelpAPI;
export default yelpAPI;
