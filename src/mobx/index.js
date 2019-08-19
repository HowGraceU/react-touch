import React from "react";
import { Route, Link } from "react-router-dom";

import { observable, autorun } from 'mobx';

const todoStore = observable({
	/* 一些观察的状态 */
	todos: [],

	count: 0,
	/* 推导值 */
	get completedCount() {
		return this.todos.filter(todo => todo.completed).length;
	}
});

/* 观察状态改变的函数 */
autorun(function () {
	console.log("Completed %d of %d items",
		todoStore.completedCount,
		todoStore.todos.length
	);
});

autorun(function () {
	console.log('count', todoStore.count);
});

/* ..以及一些改变状态的动作 */
todoStore.todos[0] = {
	title: "Take a walk",
	completed: false
};
// -> 同步打印 'Completed 0 of 1 items'

todoStore.todos[0].completed = true;
// -> 同步打印 'Completed 1 of 1 items'

todoStore.count++;

export default function Topics({ match }) {
	return (
		<div>
			<h2>mobx</h2>

			<ul>
				{/* <li><Link to={`${match.url}/react-redux`}>react-redux</Link></li> */}
			</ul>

			{/* <Route path={`${match.path}/react-redux`} component={reactRedux} /> */}
		</div>
	);
}