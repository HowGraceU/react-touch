import React from "react";
import { Route, Link } from "react-router-dom";

import './no-react';

export default function Topics({ match }) {
	return (
		<div>
			<h2>react-apollo</h2>

			<ul>
				{/* <li><Link to={`${match.url}/provider`}>provider</Link></li> */}
			</ul>

			{/* <Route path={`${match.path}/provider`} component={MyProvider} /> */}
		</div>
	);
}