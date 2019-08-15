import React, { useState, useCallback } from 'react';
import { Route, Link, Redirect, withRouter } from "react-router-dom";

export function Auth({ match }) {
	console.log(match)
	return (
		<>
			<h2>Auth</h2>

			<ul>
				<li>
					<Link to={`${match.url}/public`}>public</Link>
				</li>
				<li>
					<Link to={`${match.url}/protected`}>protected</Link>
				</li>
			</ul>

			<AuthButton url={match.url} />

			<Route path={`${match.url}/public`} component={() => <span>public</span>} />
			<Route path={`${match.url}/login`} component={Login} />
			<PrivateRoute url={match.url} path={`${match.url}/protected`} component={() => <span>protected</span>} />
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

function PrivateRoute({ url, component: Component, ...props }) {
	return (
		<Route
			{...props}
			render={
				props => {
					return fakeAuth.isAuthenticated ?
						<Component {...props} /> :
						<Redirect to={{
							pathname: `${url}/login`,
							state: { from: props.location }
						}} />
				}
			}
		/>
	)
}

const AuthButton = withRouter(
	({ history, url }) => {
		console.log(history)
		return fakeAuth.isAuthenticated ? (
			<p>
				Welcome!{" "}
				<button
					onClick={() => {
						fakeAuth.signout(() => history.push(url));
					}}
				>
					Sign out
        </button>
			</p>
		) : (
				<p>You are not logged in.</p>
			)
	}
);

function Login({ location }) {
	const [isAuth, setAuth] = useState(fakeAuth.isAuthenticated);
	const { pathname = '/' } = location.state.from;

	const login = useCallback(() => {
		fakeAuth.authenticate(() => {
			setAuth(true);
		})
	}, [])

	return (
		isAuth ?
			<Redirect to={pathname} /> :
			<>
				<span>plz login for {pathname}</span>
				<br />
				<button onClick={login}>login</button>
			</>
	)
}
