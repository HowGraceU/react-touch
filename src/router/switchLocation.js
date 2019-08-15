import React, { useState, useCallback } from 'react';
import { Route, Switch } from "react-router-dom";
import { GenerateLink } from './routers';

function One() {
	return <span>one</span>
}

function Two() {
	return <span>two</span>
}

function Three() {
	return <span>three</span>
}

function Locking() {
	return <span>locking</span>
}

const routerConfig = [
	{
		path: '/one',
		component: One
	},
	{
		path: '/two',
		component: Two
	},
	{
		path: '/three',
		component: Three
	}
]

export function SwitchLocation({ match, location }) {
	const [isLocking, setLocking] = useState(false);

	const toggleLocking = useCallback(() => {
		setLocking(!isLocking);
	}, [isLocking]);

	const url = match.path;

	return (
		<>
			<button onClick={toggleLocking}>toggle locking</button>
			<br />
			<span>isLocking: {isLocking.toString()}</span>

			<GenerateLink url={url} config={routerConfig} />

			<Switch location={isLocking ? { pathname: `${url}/locking` } : location}>
				{routerConfig.map(({ path, component }, i) => <Route key={i} path={`${url}${path}`} component={component} />)}
				<Route path={`${url}/locking`} component={Locking} />
			</Switch>
		</>
	)
}
