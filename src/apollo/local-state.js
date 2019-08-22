import React, { useState } from "react";
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { localClient } from './no-react';

const Get_Resolver_Date = gql`
	{
		clientResolver @client
	}
`;

function ShowClientData() {
	const { data, loading, error } = useQuery(Get_Resolver_Date);

	if (loading) return <div>loading...</div>
	if (error) { console.log(error); return <div>error...</div> }

	return <div>{data.clientResolver}</div>
}

const Get_New_Resolver_Date = gql`
	{
		clientResolver @client(always: true)
	}
`;


function ShowNewClientData() {
	const { data, loading, error } = useQuery(Get_New_Resolver_Date);

	if (loading) return <div>loading...</div>
	if (error) { console.log(error); return <div>error...</div> }

	return <div>{data.clientResolver}</div>
}


const ADD_DOG = gql`
	mutation AddDog($breed: String) {
		dog: addDog(breed: $breed) @client
	}
`;

const GET_DOGS = gql`
	{
		dogs @client {
			id
			breed
		}
	}
`;

function AddDog() {
	const [breed, setBreed] = useState('');
	const [addDog] = useMutation(
		ADD_DOG
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

function ShowDogs() {
	const { data, loading, error } = useQuery(GET_DOGS);

	if (loading) return <div>loading...</div>
	if (error) return <div>error...</div>

	const dogs = data ?.dogs;

	return dogs.map(dog => (
		<div key={dog.id}>
			{dog.breed}
		</div>
	))
}

export function LocalState() {
	return (
		<ApolloProvider client={localClient}>
			<ShowClientData />
			{/* 注释下面组件，ShowClientData 永远显示cache的值 */}
			<ShowNewClientData />
			<AddDog />
			<ShowDogs />
		</ApolloProvider>
	)
}