import React from "react";

export default function CodeSplitting() {
	function add() {
		import("./add").then(({add}) => {
			console.log(add(16, 26));
		});
	}

	return (
		<button onClick={add}>async add</button>
	)
}