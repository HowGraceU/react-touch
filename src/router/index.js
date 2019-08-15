import React from "react";
import { Route, Link } from "react-router-dom";

import { UrlParameter } from './urlParameter';
import { Auth } from './auth';
import { CustomLink } from './customLink';
import { PreventingTransition } from './preventingTransition';
import { Routers } from './routers';
import { SwitchLocation } from './switchLocation';

export default function Topics({ match }) {
	return (
		<div>
			<h2>router</h2>

			<ul>
				<li><Link to={`${match.url}/urlParameter`}>urlParameter</Link></li>
				<li><Link to={`${match.url}/auth`}>auth</Link></li>
				<li><Link to={`${match.url}/customLink`}>customLink</Link></li>
				<li><Link to={`${match.url}/preventingTransition`}>preventingTransition</Link></li>
				<li><Link to={`${match.url}/routers`}>routers</Link></li>
				<li><Link to={`${match.url}/switchLocation`}>switchLocation</Link></li>
			</ul>

			<Route path={`${match.path}/urlParameter`} component={UrlParameter} />
			<Route path={`${match.path}/auth`} component={Auth} />
			<Route path={`${match.path}/customLink`} component={CustomLink} />
			<Route path={`${match.path}/preventingTransition`} component={PreventingTransition} />
			<Route path={`${match.path}/routers`} component={Routers} />
			<Route path={`${match.path}/switchLocation`} component={SwitchLocation} />
		</div>
	);
}