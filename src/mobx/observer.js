import React from 'react';
import { observable, action } from 'mobx';
import { observer, Observer } from "mobx-react"

export function MyObserver() {
	const person = observable({ name: "John" })

	const change = action(e => {
		person.name = e.target.value;
	})

	return (
		<>
			<input type="text" onChange={change} />
			<br />
			<MobxClass person={person} />
			<MobxFun person={person} />
			<ObserverFun person={person} />
			<NormalComponent person={person} />
		</>
	)
}

// ---- ESNext syntax with decorator syntax enabled ----
@observer
class MobxClass extends React.Component {
	render() {
		return (
			<>
				MobxClass: {this.props.person.name}
			</>
		)
	}
}

// ---- or just use function components: ----
const MobxFun = observer(({ person }) => <div>MobxFun: {person.name}</div>);

const ObserverFun = ({ person }) => <Observer render={() => <div>ObserverFun: {person.name}</div>} />;

const NormalComponent = ({ person }) => <div>NormalComponent: {person.name}</div>;