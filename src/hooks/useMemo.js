import React, { useState, useMemo } from 'react';

function ShowCount(props) {
	return <span>{props.data}</span>
}

export function UseMemo() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	function dbCount2() {
		console.log('calc dbCount2');
		return 2 * count2
	}

	const memoDbCount2 = useMemo(() => {
		console.log('calc memoDbCount2');
		return dbCount2()
	}, [count2])

	return (
		<>
			<button onClick={() => setCount(count + 1)}>add count</button>
			<ShowCount data={dbCount2()} />
			<button onClick={() => setCount2(count2 + 1)}>add count2</button>
			<ShowCount data={memoDbCount2} />
		</>
	)
}