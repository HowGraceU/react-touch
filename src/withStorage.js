import React, {
	Component
} from 'react';

export default function WithStorage(WrappedComponent, Key) {
	return class extends Component {
		static displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
		constructor(props) {
			super(props);
			this.state = {
				data: null
			}
		}

		componentDidMount() {
			let data = localStorage.getItem(Key)
			this.setState({
				data
			})
		}

		render() {
			return this.state.data && <WrappedComponent data = {
				this.state.data
			} {
				...this.props
			}
			/>
		}
	}
}

export function createStorageWarp(key) {
	return (WrappedComponent) => {
		return WithStorage(WrappedComponent, key);
	}
}

function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}