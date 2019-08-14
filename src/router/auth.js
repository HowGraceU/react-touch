import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

export function Auth({ match }) {
	return (
		<>
			<h2>UrlParameter</h2>
			<ul>
				<li>
					<Link to={`${match.url}/public`}>public</Link>
				</li>
				<li>
					<Link to={`${match.url}/protected`}>protected</Link>
				</li>
			</ul>

			<Route path={`${match.url}/public`} component={() => <span>public</span>} />
			<Route path={`${match.url}/login`} component={Login} />
			<PrivateRoute match={match} path="/protected" component={() => <span>protected</span>} />
		</>
	)
}

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

function PrivateRoute(props) {
	return (
		fakeAuth.isAuthenticated ?
			<Route {...props} /> :
			<Redirect to={{
				pathname: `${props.match.url}/login`,
				state: { from: props.location }
			}} />
	)
}

function Login({ location }) {
	const [isAuth, setAuth] = useState(fakeAuth.isAuthenticated);

	console.log(location);

	return <span />
}
