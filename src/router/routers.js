import React from "react";
import { Route, Link } from "react-router-dom";

function Index() {
	return <span>index</span>
}

function One() {
	return <span>one</span>
}

function More({ match, config }) {
	const url = match.path;

	return (
		<>
			<h3>more</h3>

			<ul>
				<GenerateLink config={config} url={url} />
			</ul>

			<GenerateRoute config={config} url={url} />
		</>
	)
}

function Two() {
	return <span>two</span>
}

function Three() {
	return <span>three</span>
}

const routerConfig = [
	{
		path: '/',
		component: Index,
		exact: true
	},
	{
		path: '/one',
		component: One
	},
	{
		path: '/more',
		component: More,
		routerConfig: [
			{
				path: '/two',
				component: Two
			},
			{
				path: '/three',
				component: Three
			}
		]
	}
]

export function GenerateLink({ config, url }) {
	return (
		<>
			{config.map(({ path }, i) => {
				return <li key={i}>
					<Link to={`${url}${path}`}>{path || '/'}</Link>
				</li>
			})}
		</>
	)
}

export function GenerateRoute({ config, url }) {
	return (
		<>
			{config.map((route, i) => {
				const { path, exact, routerConfig } = route;
				return <Route
					exact={exact}
					key={i}
					path={`${url}${path}`}
					render={props => <route.component {...props} config={routerConfig} />}
				/>
			})}
		</>
	)
}

export function Routers({ match }) {
	const url = match.path;

	return (
		<>
			<h2>Routers Config</h2>

			<ul>
				<GenerateLink config={routerConfig} url={url} />
			</ul>


			<GenerateRoute config={routerConfig} url={url} />
		</>
	)
}