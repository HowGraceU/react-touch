import React from 'react';
import { Route, Link } from "react-router-dom";

export function UrlParameter({ match }) {
	return (
		<>
			<h2>UrlParameter</h2>

			<ul>
				<li>
					<Link to={`${match.url}/netflix`}>Netflix</Link>
				</li>
				<li>
					<Link to={`${match.url}/modus-create`}>Modus Create</Link>
				</li>
				<li>
					<Link to={`${match.url}/match/jqx`}>Match jqx</Link>
				</li>
				<li>
					<Link to={`${match.url}/match/666`}>Match 666</Link>
				</li>
			</ul>

			<Route exact path={`${match.url}/:id`} component={Child} />
			<Route path={`${match.url}/match/:name(jqx)`} component={Match} />
			<Route component={NoMatch} />
		</>
	)
}

function Child({ match }) {
	return <span>{match.params.id}</span>
}

function Match({ match }) {
	return <span>Match: {match.params.name}</span>
}

function NoMatch({ match }) {
	return <span>No Match: {match.url}</span>
}
