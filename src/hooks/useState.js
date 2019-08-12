import React, { useState } from 'react';

export function UseState(props) {
	console.log(1);
	const [count, setCount] = useState(0);

	return <button onClick={() => setCount(count + 1)}>add:{count}</button>
}