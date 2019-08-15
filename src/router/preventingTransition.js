import React, { useState } from 'react';
import { Route, Link, Prompt } from "react-router-dom";

export function PreventingTransition({ match }) {
	return (
		<>
			<h2>PreventingTransition</h2>

			<ul>
				<li>
					<Link to={match.url}>Form</Link>
				</li>
				<li>
					<Link to={`${match.url}/one`}>One</Link>
				</li>
				<li>
					<Link to={`${match.url}/two`}>Two</Link>
				</li>
			</ul>

			<Route path={match.url} exact component={Form} />
			<Route path={`${match.url}/one`} render={() => <h3>One</h3>} />
			<Route path={`${match.url}/two`} render={() => <h3>Two</h3>} />
		</>
	)
}

function Form({ location }) {
	const [value, setValue] = useState('');

	return (
		<>
			<Prompt
				when={!!value}
				message={location =>
					`Are you sure you want to go to ${location.pathname}`
				}
			/>
			<input type="text" value={value} onChange={e => setValue(e.target.value)} />
		</>
	)
}