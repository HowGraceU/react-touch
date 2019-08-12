import React from 'react';
import ReactDOM from 'react-dom';

export class Component extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			renderPortal: false
		}
	}

	componentDidMount() {
		this.setState({ renderPortal: true })
	}

	render() {
		return (
			<>
				<RenderJsx />
				<ul>
					RenderArray
					<RenderArray />
				</ul>
				<PortalsWarp />
				{this.state.renderPortal && <RenderPortals />}
				<RenderString />
				<RenderNumber />
				<RenderNull />

				<LifeCycle />
			</>
		)
	}
}

function RenderJsx() {
	return <div>RenderJsx</div>
}

function RenderArray() {
	return Array.from({ length: 5 }, (v, i) => <li key={i}>{i}</li>)
}

function PortalsWarp() {
	return <div id="warp" style={{ color: 'greenyellow' }}></div>
}

function RenderPortals() {
	return ReactDOM.createPortal(
		'RenderPortals',
		document.getElementById('warp')
	)
}

function RenderString() {
	return 'RenderString'
}

function RenderNumber() {
	return 'RenderNumber'
}

function RenderNull() {
	return null
}

class LifeCycle extends React.Component {
	constructor(props) {
		super(props);
		console.log('constructor');
		this.state = {
			count: 0
		}
	}

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps', props, state);

		if (state.count === 5) {
			return { count: 0 }
		}
		return state;
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps, nextState);

		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate', prevProps, prevState);

		return 'jqx';
	}

	componentDidUpdate(state, props, snapshot) {
		console.log('shouldComponentUpdate', state, props, snapshot);
	}

	handleClick = e => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		console.log('render');
		return <button onClick={this.handleClick}>{this.state.count}</button>
	}
}