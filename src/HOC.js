import React from 'react';
import WithStorage, { createStorageWarp } from './withStorage';

localStorage.name = 'react test';
localStorage.time = new Date();

export function HOC() {
	return (
		<>
			<HocName />
			<HocTime />
		</>
	)
}

function HocName() {
	const HocDom = WithStorage(StorageWarp, 'name');
	return (
		<HocDom />
	)
}


export @createStorageWarp('time') class HocTime extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <StorageWarp>{this.props.data}</StorageWarp>
	}
}

function StorageWarp(props) {
	return (<div>{props.data}</div>)
}