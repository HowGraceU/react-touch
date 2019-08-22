import React from "react";
import { ApolloProvider, useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { localClient } from './no-react';

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

function ShowDog() {
	const [getDogs, { loading, data }] = useLazyQuery(GET_DOGS);

	if (loading) return <div>loading...</div>

	return (
		<>
			<button onClick={getDogs}>get dogs</button>
			{
				data ?.dogs.map(dog => (
					<div key={dog.id}>
						{dog.breed}
					</div>
				))
			}
		</>
	)
}

export function LazyQuery() {
	return (
		<ApolloProvider client={localClient}>
			<ShowDog />
		</ApolloProvider>
	)
}