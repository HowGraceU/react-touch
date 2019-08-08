import React, { Component } from 'react';

export default function WithStorage(WrappedComponent, Key) {
	return class extends Component {
		componentWillMount() {
			let data = localStorage.getItem(Key)
			this.setState({ data })
		}

		render() {
			return <WrappedComponent data={this.state.data} {...this.props} />
		}
	}
}

export function createStorageWarp(key) {
	return (WrappedComponent) => {
		return WithStorage(WrappedComponent, key);
	}
}