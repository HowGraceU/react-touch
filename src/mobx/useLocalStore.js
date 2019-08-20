import React from 'react';
import { useLocalStore, useObserver } from "mobx-react-lite";

export function UseLocalStore() {
	const todo = useLocalStore(() => ({
		title: "Test",
		done: true
	}))

	function toggle() {
		todo.done = !todo.done
	}

	return useObserver(() => (
		<h1 onClick={toggle}>
			{todo.title} {todo.done ? '😜' : '🏃'}
		</h1>
	))
}
