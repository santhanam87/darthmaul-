import { gql } from 'graphql-request';
import buildGQLClient from '../services/gqlclient';

const getBusiness = async (businessName) => {
    const body = gql`
            query {
                business(id:"${businessName}") {
                    name
                    id
                    alias
                    rating
                    url
                }
            }`;
    const GQLClient = buildGQLClient();
    return GQLClient.request(body);
};

export default getBusiness;
