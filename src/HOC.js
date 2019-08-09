import React, { useState } from 'react';
import WithStorage, { createStorageWarp } from './withStorage';

localStorage.name = 'react test';
localStorage.time = new Date();

export function HOC() {
	const [count, setCount] = useState(0);

	return (
		<>
			<HocName />
			<HocTime />
			<button onClick={() => setCount(count + 1)}>render</button>
		</>
	)
}

const HocDom = WithStorage(StorageWarp, 'name');
function HocName() {
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