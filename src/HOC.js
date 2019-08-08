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

@createStorageWarp('time')
class HocTime extends React.Component {
	render() {
		return <div>{this.props.data}</div>
	}
}

export { HocTime };

function StorageWarp(props) {
	return (<div>{props.data}</div>)
}