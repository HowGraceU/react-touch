import React, { useCallback } from 'react';
import { observable, action } from 'mobx';
import { observer, Provider, inject } from 'mobx-react';

const ShowName = inject(store => { return { name: store.user.name } })(
	observer(({ name }) => <div>{name}</div>)
);

const GetUser = inject('user')(
	observer(({ user }) => <div>{user.name}</div>)
)

const ChangeUserName = inject('user')(
	observer(({ user }) => {
		const handleChange = useCallback(action(e => {
			user.name = e.target.value;
		}), [user])

		return <input value={user.name} onChange={handleChange} />
	})
)

const user = observable({
	name: 'inject name'
});

export function MyProvider() {
	return (
		<Provider user={user}>
			<ShowName />
			<GetUser />
			<ChangeUserName />
		</Provider>
	)
}