import React, { useState, useEffect } from 'react';

export function UseEffect() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	// 相当于 componentDidMount 和 componentDidUpdate:
	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		console.log(`[useEffect] count:${count}`);
		document.title = `You clicked ${count} times`;
		return () => {
			document.title = `Clear Effect`;
		}
	}, [count]);

	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		console.log(`[useEffect] count2:${count2}`);
	}, [count2]);

	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		console.log(`[useEffect] count:${count}, count2:${count2}`);
	});

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>
				Click me
      </button>
			<button onClick={() => setCount2(count2 + 1)}>
				Click me2
      </button>
		</div>
	);
}