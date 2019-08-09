import React, { Component } from 'react';

//子组件
const Son = (props) => {
	console.log("--son--render----")
	return <div> Son: {props.son}</div>
}

//父组件，传给子组件一个on的prop
export class Avoid extends Component {
	state = {
		name: 'scarlet',
		son: 2
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: this.state.name,
				son: this.state.son
			})
		}, 1 * 1000)
	}

	render() {
		console.log("--parent--render----")
		return (
			<div className="App">
				<h2>name : {this.state.name}</h2>
				<Son son={this.state.son} />
				<Son2 son={this.state.son} />
				<Son3 son={this.state.son} />
			</div>
		);
	}
}

class Son2 extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.son !== nextProps.son;
	}

	render() {
		console.log("--son2--render----")
		return <div> Son2: {this.props.son}</div>
	}
}

class Son3 extends React.PureComponent {
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.son !== nextProps.son;
	}

	render() {
		console.log("--son3--render----")
		return <div> Son3: {this.props.son}</div>
	}
}