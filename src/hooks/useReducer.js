import React, { useReducer } from 'react';

const initCount = 0;

export function UseReducer() {
	function init(initCount) {
		return { count: initCount }
	}

	function reducer(state, action) {
		switch (action.type) {
			case 'increment':
				return { count: state.count + 1 };
			case 'decrement':
				return { count: state.count - 1 };
			case 'reset':
				return init(initCount);
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, initCount, init);

	console.log('render');
	return (
		<>
			<h3>count: {state.count}</h3>
			<button onClick={() => { dispatch({ type: 'increment' }) }}>increment</button>
			<button onClick={() => { dispatch({ type: 'decrement' }) }}>decrement</button>
			<button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
			<button onClick={() => { dispatch({ type: 'didNothing' }) }}>didNothing</button>
		</>
	)
}