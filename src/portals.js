import React from 'react';
import ReactDOM from 'react-dom';

export class Portal extends React.Component {
	state = {
		refDom: null
	}

	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		this.setState({ refDom: this.myRef.current })
	}

	render() {
		return (
			<div onClick={() => { console.log('div') }}>
				<OuterWarp ref={this.myRef} onClick={() => { console.log('outerWarp') }} />
				<PortalDiv warp={this.state.refDom} onClick={() => { console.log('portalDiv') }}>
					<button>click</button>
				</PortalDiv>
			</div>
		)
	}
}

const OuterWarp = React.forwardRef((props, ref) => {
	return <div style={{ background: 'green' }} ref={ref} onClick={() => { console.log('outerWarp') }} />
});

function PortalDiv(props) {
	return props.warp && ReactDOM.createPortal(
		props.children,
		props.warp
	);
}
