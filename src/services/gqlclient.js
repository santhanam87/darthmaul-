import { GraphQLClient } from 'graphql-request';

const buildGQLClient = () => {
    let endPoint;
    let apiKey;
    if (process && process.env) {
        endPoint = process.env.YELP_ENDPOINT;
        apiKey = process.env.API_KEY;
    } else if (window) {
        endPoint = window.YELP_ENDPOINT;
        apiKey = window.API_KEY;
    }
    const graphQLClient = new GraphQLClient(endPoint, {
        headers: {
            authorization: `Bearer ${apiKey}`,
        },
    });
    return graphQLClient;
};

export default buildGQLClient;
