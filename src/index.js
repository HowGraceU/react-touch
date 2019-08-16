import React, { Suspense, lazy } from "react";
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.css';
import { Home } from './home';
import { Context } from "./context";
import { ErrorBoundary } from "./error-boundary";
import { Refs } from "./refs";
import { HOC } from "./HOC";
import { Avoid } from './avoid-reconciliation';
import { Portal } from './portals';
import { RenderProps } from './render-props';
import { Component } from './component';
import Hooks from './hooks';
import TouchRouter from './router';
import Redux from './redux';

const CodeSplitting = lazy(() => import('./code-splitting'));

function App() {
	return (
		<React.StrictMode>
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
								<Route path="/avoid-reconciliation" component={Avoid} />
								<Route path="/portal" component={Portal} />
								<Route path="/render-props" component={RenderProps} />
								<Route path="/component" component={Component} />
								<Route path="/hooks" component={Hooks} />
								<Route path="/router" component={TouchRouter} />
								<Route path="/redux" component={Redux} />
							</Switch>
						</Suspense>
					</div>
				</div>
			</Router>
		</React.StrictMode>
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
			<li><Link to="/error-boundary">error-boundary</Link></li>
			<li><Link to="/refs">refs</Link></li>
			<li><Link to="/HOC">HOC</Link></li>
			<li><Link to="/avoid-reconciliation">avoid-reconciliation</Link></li>
			<li><Link to="/portal">portal</Link></li>
			<li><Link to="/render-props">render-props</Link></li>
			<li><Link to="/component">component</Link></li>
			<li><Link to="/hooks">hooks</Link></li>
			<li><Link to="/router">router</Link></li>
			<li><Link to="/redux">redux</Link></li>
		</ul>
	);
}

ReactDom.render(<App />, window.root)