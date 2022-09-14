import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import graphqlBaseQuery from '../../services/gqlclient';

const listViewAPI = createApi({
    reducerPath: 'listView',
    baseQuery: graphqlBaseQuery,
    endpoints: (builder) => ({
        insertPost: builder.mutation({
            query: ({ author, description, title }) => ({
                body: gql`
                    mutation InsertPost($author: String, $description: String, $title: String) {
                        insert_posts(objects: { author: $author, description: $description, title: $title }) {
                            affected_rows
                        }
                    }
                `,
                variables: { author, description, title },
            }),
        }),
        getPosts: builder.query({
            query: () => ({
                body: gql`
                    query GetPosts {
                        posts {
                            author
                            created
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

export const { useGetPostsQuery } = listViewAPI;
export default listViewAPI;
