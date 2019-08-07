import React, { useState } from 'react';

// export class ThrowError extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = { flag: false };
// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleClick() {
// 		this.setState({ flag: true });
// 	}

// 	render() {
// 		if (this.state.flag) {
// 			throw new Error('wrong');
// 		}

// 		return <input type="button" value='throw' onClick={this.handleClick} />
// 	}
// }

export function ThrowError() {
	const [flag, setFlag] = useState(false);

	if (flag) {
		throw new Error('wrong');
	}

	return <input type="button" value='throw' onClick={() => {setFlag(true)}} />
}