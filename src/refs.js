import React from 'react';

export function Refs() {
	return (
		<>
			<CreateRefs />
			<CallbackRefs />
			<ForwardRef />
		</>
	)
}

class CreateRefs extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}

	componentDidMount() {
		console.log(this.myRef.current);
	}

	render() {
		return <div ref={this.myRef}>123</div>;
	}
}

function CallbackRefs() {
	let input = null;

	function setInput(element) {
		input = element;
	}

	function focusTextInput() {
		input.focus();
	}

	return (
		<>
			<input
				type="text"
				ref={setInput}
			/>
			<input
				type="button"
				value="Focus the text input"
				onClick={focusTextInput}
			/>
		</>
	)
}

const FancyButton = React.forwardRef((props, ref) => (
	<button ref={ref} className="FancyButton" onClick={props.log}>
		{props.children}
	</button>
));

function ForwardRef() {
	const ref = React.createRef();

	function log() {
		console.log(ref.current);
	}

	return (
		<div>
			<FancyButton ref={ref} log={log}>Click me!</FancyButton>
		</div>
	)
}