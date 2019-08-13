import React from "react";
import { Route, Link } from "react-router-dom";

import { UseState } from './useState';
import { UseEffect } from './useEffect';
import { UseMyHook } from './useMyHook';
import { UseContext } from './useContext';
import { UseReducer } from './useReducer';
import { UseCallback } from './useCallback';
import { UseMemo } from './useMemo';

export default function Topics({ match }) {
	return (
		<div>
			<h2>Hooks</h2>

			<ul>
				<li><Link to={`${match.url}/useState`}>useState</Link></li>
				<li><Link to={`${match.url}/useEffect`}>useEffect</Link></li>
				<li><Link to={`${match.url}/useMyHook`}>useMyHook</Link></li>
				<li><Link to={`${match.url}/useContext`}>useContext</Link></li>
				<li><Link to={`${match.url}/useReducer`}>useReducer</Link></li>
				<li><Link to={`${match.url}/useCallback`}>useCallback</Link></li>
				<li><Link to={`${match.url}/useMemo`}>useMemo</Link></li>
			</ul>

			<Route exact path={`${match.path}/useState`} component={UseState} />
			<Route exact path={`${match.path}/useEffect`} component={UseEffect} />
			<Route exact path={`${match.path}/useMyHook`} component={UseMyHook} />
			<Route exact path={`${match.path}/useContext`} component={UseContext} />
			<Route exact path={`${match.path}/useReducer`} component={UseReducer} />
			<Route exact path={`${match.path}/useCallback`} component={UseCallback} />
			<Route exact path={`${match.path}/useMemo`} component={UseMemo} />
		</div>
	);
}