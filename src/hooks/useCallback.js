import React, { memo, useState, useCallback, useMemo } from 'react';

const ClickInput = memo(function ClickInput(props) {
	console.log(`render ${props.name}`);
	return <button onClick={props.onClick}>{props.name}</button>
});

export function UseCallback() {
	const [count, setCount] = useState(0);

	function handleClick() {
		console.log('click');
	}

	const callback = useCallback(handleClick, []);

	const memoCallback = useMemo(handleClick, []);

	return (
		<>
			<button onClick={() => setCount(count + 1)}>click</button>
			<ClickInput onClick={handleClick} name="normal" />
			<ClickInput onClick={callback} name="useCallback" />
			<ClickInput onClick={memoCallback} name="memoCallback" />
		</>
	);
}
