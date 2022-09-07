import { ClientError, GraphQLClient } from 'graphql-request';

const buildGQLClient = () => {
    let endPoint;
    let apiKey;
    if (typeof process !== 'undefined') {
        endPoint = process.env.YELP_ENDPOINT;
        apiKey = process.env.API_KEY;
    } else if (window.END_POINT && window.API_KEY) {
        endPoint = window.END_POINT;
        apiKey = window.API_KEY;
    }
    const graphQLClient = new GraphQLClient(endPoint, {
        headers: {
            'x-hasura-admin-secret': apiKey,
        },
    });
    return graphQLClient;
};

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

export default graphqlBaseQuery;
