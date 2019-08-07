import React, { Suspense, lazy } from "react";
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from './home';
import { Context } from "./context";
import { ErrorBoundary } from "./errorBoundary";

const CodeSplitting = lazy(() => import('./codeSplitting'));

function App() {
	return (
		<Router>
			<div>
				<Header />

				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/code-splitting" component={CodeSplitting} />
						<Route path="/context" component={Context} />
						<Route path="/error-boundaries" component={ErrorBoundary} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

function Header() {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li><Link to="/code-splitting">code-splitting</Link></li>
			<li><Link to="/context">context</Link></li>
			<li><Link to="/error-boundaries">error-boundary</Link></li>
		</ul>
	);
}

ReactDom.render(<App />, document.body)