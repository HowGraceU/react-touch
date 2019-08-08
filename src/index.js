import React, { Suspense, lazy } from "react";
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.css';
import { Home } from './home';
import { Context } from "./context";
import { ErrorBoundary } from "./errorBoundary";
import { Refs } from "./refs";
import { HOC } from "./HOC";

const CodeSplitting = lazy(() => import('./codeSplitting'));

function App() {
	return (
		<Router>
			<div className="container">
				<Header />

				<div className="right">
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/code-splitting" component={CodeSplitting} />
							<Route path="/context" component={Context} />
							<Route path="/error-boundary" component={ErrorBoundary} />
							<Route path="/refs" component={Refs} />
							<Route path="/HOC" component={HOC} />
						</Switch>
					</Suspense>
				</div>
			</div>
		</Router>
	);
}

function Header() {
	return (
		<ul className="left">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li><Link to="/code-splitting">code-splitting</Link></li>
			<li><Link to="/context">context</Link></li>
			<li><Link to="/error-boundaries">error-boundary</Link></li>
			<li><Link to="/refs">refs</Link></li>
			<li><Link to="/HOC">HOC</Link></li>
		</ul>
	);
}

ReactDom.render(<App />, document.body)