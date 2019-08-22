import ApolloClient, {
	gql
} from 'apollo-boost';
import {
	InMemoryCache
} from 'apollo-cache-inmemory';

const client = new ApolloClient({
	uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

client
	.query({
		query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
	})
	.then(result => console.log(result));

export default client;

const cache = new InMemoryCache();
export const localClient = new ApolloClient({
	uri: 'http://localhost:4000/',
	cache,
	resolvers: {
		Query: {
			clientResolver: () => {
				console.log('get client')
				return new Date().toString()
			}
		},
		Mutation: {
			addDog: (_root, variables, { cache, getCacheKey }) => {
				const GET_DOGS = gql`
					{
						dogs @client {
							id
							breed
						}
					}
				`;

				const breed = variables.breed;

				const { dogs } = cache.readQuery({ query: GET_DOGS });
				cache.writeQuery({
					query: GET_DOGS,
					data: { dogs: dogs.concat([{
						__typename: 'dog',
						id: dogs.length,
						breed
					}]) },
				});
			}
		}
	},
});

const dogs = [{
	__typename: 'dog',
	id: 0,
	breed: '柯基'
}, {
	__typename: 'dog',
	id: 1,
	breed: '柴犬'
}, {
	__typename: 'dog',
	id: 2,
	breed: '哈士奇'
}, {
	__typename: 'dog',
	id: 3,
	breed: '阿拉斯加'
}, {
	__typename: 'dog',
	id: 4,
	breed: '斗牛'
}]

cache.writeData({
	data: {
		clientResolver: 'cache data',
		dogs
	},
});