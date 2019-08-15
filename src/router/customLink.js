import React from 'react';
import { Route, Link } from "react-router-dom";

export function CustomLink({ match }) {
	return (
		<>
			<h2>CustomLink</h2>

			<ul>
				<li><MyLink to={`${match.url}/a`} label="a" /></li>
				<li><MyLink to={`${match.url}/b`} label="b" /></li>
				<li><MyLink to={`${match.url}/c`} label="c" /></li>
			</ul>

			<Route path={`${match.url}/a`} component={() => <ShowMsg msg="a" />} />
			<Route path={`${match.url}/b`} component={() => <ShowMsg msg="b" />} />
			<Route path={`${match.url}/c`} component={() => <ShowMsg msg="c" />} />
		</>
	)
}

function MyLink({ to, label }) {
	return <Route
		path={to}
		children={
			({ match }) =>
				<div className={match && "active"}>
					{ match && '>'}
					<Link to={to}>{label}</Link>
			</div >
		}
/>
}

function ShowMsg({ msg }) {
	return <span>{msg}</span>
}