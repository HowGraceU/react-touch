import React from "react";
import { Route, Link } from "react-router-dom";

import './no-react';
import { MyProvider } from './provider';
import { MyProviderPoll } from './provider-poll';
import { LazyQuery } from './lazy-query';
import { Mutation } from './mutation';
import { LocalState } from './local-state';

export default function Topics({ match }) {
	return (
		<div>
			<h2>react-apollo</h2>

			<ul>
				<li><Link to={`${match.url}/provider`}>provider</Link></li>
				<li><Link to={`${match.url}/provider-poll`}>provider-poll</Link></li>
				<li><Link to={`${match.url}/lazy-query`}>lazy-query</Link></li>
				<li><Link to={`${match.url}/mutation`}>mutation</Link></li>
				<li><Link to={`${match.url}/local-state`}>local-state</Link></li>
			</ul>

			<Route path={`${match.path}/provider`} component={MyProvider} />
			<Route path={`${match.path}/provider-poll`} component={MyProviderPoll} />
			<Route path={`${match.path}/lazy-query`} component={LazyQuery} />
			<Route path={`${match.path}/mutation`} component={Mutation} />
			<Route path={`${match.path}/local-state`} component={LocalState} />
		</div>
	);
}