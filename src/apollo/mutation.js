import React, { useState } from "react";
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';
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

const ADD_Dog = gql`
	mutation AddDog($breed: String) {
		dog: addDog(breed: $breed) {
			id
			breed
		}
	}
`;

function AddDog() {
	const [breed, setBreed] = useState('');
	const [addDog] = useMutation(
		ADD_Dog,
		{
			update(cache, { data: { dog } }) {
				const { dogs } = cache.readQuery({ query: GET_DOGS });
				cache.writeQuery({
					query: GET_DOGS,
					data: { dogs: dogs.concat([dog]) },
				});
			}
		}
	);

	return (
		<>
			<div>
				<input type="text" onChange={e => setBreed(e.target.value)} />
				<button onClick={() => addDog({ variables: { breed } })}>add</button>
			</div>
		</>
	)
}

function ShowDog() {
	const { data } = useQuery(GET_DOGS);

	const dogs = data ?.dogs;

	return (
		<>
			{
				dogs && dogs.map(dog => (
					<div key={dog.id}>
						{dog.breed}
					</div>
				))
			}
		</>
	)
}

export function Mutation() {
	return (
		<ApolloProvider client={localClient}>
			<AddDog />
			<ShowDog />
		</ApolloProvider>
	)
}