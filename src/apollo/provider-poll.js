import React, { useState, useCallback } from "react";
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
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

function Dogs({ onDogSelected }) {
	const { loading, error, data } = useQuery(GET_DOGS);

	const handleChange = useCallback(e => {
		const value = e.target.value;
		onDogSelected(value);
	}, [onDogSelected])

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return (
		<select name="dog" onChange={handleChange}>
			{data.dogs.map(dog => (
				<option key={dog.id} value={dog.breed}>
					{dog.breed}
				</option>
			))}
		</select>
	);
}

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      breedAndDate
    }
  }
`;

function DogBreedAndDate({ breed }) {
	const { loading, error, data, startPolling, stopPolling, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
		variables: { breed },
	});

	if (networkStatus === 4) return 'Refetching!';
	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<>
			<button onClick={() => startPolling(1000)}>start poll</button>
			<br />
			<button onClick={stopPolling}>stop poll</button>
			<br />
			<button onClick={() => refetch()}>refetch</button>
			<br />
			<span>{data.dog ?.breedAndDate}</span>
		</>
	);
}

function ShowDog() {
	const [breed, setBreed] = useState('');

	return (
		<>
			<DogBreedAndDate breed={breed} />
			<Dogs onDogSelected={newBreed => setBreed(newBreed)} />
		</>
	)
}

export function MyProviderPoll() {
	return (
		<ApolloProvider client={localClient}>
			<ShowDog />
		</ApolloProvider>
	)
}