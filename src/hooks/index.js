import React from "react";
import { Route, Link } from "react-router-dom";

import { UseState } from './useState';
import { UseEffect } from './UseEffect';

export default function Topics({ match }) {
	return (
		<div>
			<h2>Hooks</h2>

			<ul>
				<li><Link to={`${match.url}/useState`}>useState</Link></li>
				<li><Link to={`${match.url}/useEffect`}>useEffect</Link></li>
			</ul>

			<Route exact path={`${match.path}/useState`} component={UseState} />
			<Route exact path={`${match.path}/useEffect`} component={UseEffect} />
		</div>
	);
}