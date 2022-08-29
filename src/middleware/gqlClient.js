import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
	ApolloLink,
	concat,
} from '@apollo/client';
import fetch from 'cross-fetch';
import 'dotenv/config';

const httpLink = new HttpLink({
	uri: process.env.YELP_ENDPOINT,
	fetch,
});

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
			authorization: `Bearer ${process.env.API_KEY}`,
		},
	}));

	return forward(operation);
});
console.log(process.env.API_KEY);
const getGQLclient = () =>
	new ApolloClient({
		link: concat(authMiddleware, httpLink),
		cache: new InMemoryCache(),
	});

export default getGQLclient;
