import React from "react";
import { Route, Link } from "react-router-dom";

import { UrlParameter } from './urlParameter';
import { Auth } from './auth';

export default function Topics({ match }) {
	return (
		<div>
			<h2>router</h2>

			<ul>
				<li><Link to={`${match.url}/urlParameter`}>urlParameter</Link></li>
				<li><Link to={`${match.url}/auth`}>auth</Link></li>
			</ul>

			<Route path={`${match.path}/urlParameter`} component={UrlParameter} />
			<Route path={`${match.path}/auth`} component={Auth} />
		</div>
	);
}