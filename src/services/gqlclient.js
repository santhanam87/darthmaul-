import { GraphQLClient } from 'graphql-request';

const buildGQLClient = (endPoint, apiKey) => {
    const graphQLClient = new GraphQLClient(endPoint, {
        headers: {
            authorization: `Bearer ${apiKey}`,
        },
    });
    return graphQLClient;
};

export default buildGQLClient;
