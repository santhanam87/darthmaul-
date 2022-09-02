import { createApi } from '@reduxjs/toolkit/query';
import { gql, ClientError, GraphQLClient } from 'graphql-request';

const graphqlBaseQuery =
    ({ baseUrl, apiKey }) =>
    async ({ body }) => {
        try {
            const graphQLClient = new GraphQLClient(baseUrl, {
                headers: {
                    authorization: `Bearer ${apiKey}`,
                },
            });
            const data = await graphQLClient.request(body);
            return { data };
        } catch (error) {
            if (error instanceof ClientError) {
                return { error: { status: error.response.status, data: error } };
            }
            return { error: { status: 500, data: error } };
        }
    };

const getYelpMiddleware = (apiKey, baseUrl) =>
    createApi({
        reducerPath: 'yelpApi',
        baseQuery: graphqlBaseQuery({
            baseUrl,
            apiKey,
        }),
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
        }),
    });

export default getYelpMiddleware;
