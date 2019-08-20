import React from "react";
import { Route, Link } from "react-router-dom";

import './no-react';
import { MyObserver } from './observer';
import { UseLocalStore } from './useLocalStore';
import { MyProvider } from './provider';

export default function Topics({ match }) {
	return (
		<div>
			<h2>mobx</h2>

			<ul>
				<li><Link to={`${match.url}/observer`}>observer</Link></li>
				<li><Link to={`${match.url}/useLocalStore`}>useLocalStore</Link></li>
				<li><Link to={`${match.url}/provider`}>provider</Link></li>
			</ul>

			<Route path={`${match.path}/observer`} component={MyObserver} />
			<Route path={`${match.path}/useLocalStore`} component={UseLocalStore} />
			<Route path={`${match.path}/provider`} component={MyProvider} />
		</div>
	);
}