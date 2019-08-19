import React from "react";
import { Route, Link } from "react-router-dom";

import reactRedux from './react-redux';

export default function Topics({ match }) {
	return (
		<div>
			<h2>router</h2>

			<ul>
				<li><Link to={`${match.url}/react-redux`}>react-redux</Link></li>
			</ul>

			<Route path={`${match.path}/react-redux`} component={reactRedux} />
		</div>
	);
}