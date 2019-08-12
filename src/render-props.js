import React from 'react';

export function RenderProps() {
	return (
		<>
			<Mouse render={(mouse) => <PointRed {...mouse} />} />
			<Mouse>
				{(mouse) => <PointGreen {...mouse} /> }
			</Mouse>
		</>
	)
}

class Mouse extends React.Component {
	constructor(props) {
		super(props);
		this.state = { x: 0, y: 0 };
		this.handleMouseMove = this.handleMouseMove.bind(this);
	}

	handleMouseMove(e) {
		const { pageX, pageY } = e;

		this.setState({ x: pageX, y: pageY });
	}

	render() {
		return (
			<div style={{ height: '50%' }} onMouseMove={this.handleMouseMove}>
				{this.props.render && this.props.render(this.state)}
				{this.props.children && this.props.children(this.state)}
			</div>
		)
	}
}

function PointRed(props) {
	return <div style={{ background:'red', width: 50, height: 50, borderRadius: '50%', position: 'absolute', top: props.y, left: props.x }} />
}

function PointGreen(props) {
	return <div style={{ background:'green', width: 50, height: 50, borderRadius: '50%', position: 'absolute', top: props.y, left: props.x }} />
}