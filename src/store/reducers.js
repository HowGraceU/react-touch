import { combineReducers } from 'redux';
import { ADD_COUNT, REDUCE_COUNT } from './actions';

export function handleCount(state = 0, { type, count }) {
	switch (type) {
		case ADD_COUNT:
			return state + count;
		case REDUCE_COUNT:
			return state - count;
		default:
			return state
	}
}

function test(state = 0, action) {
	return state + 1;
}

export default combineReducers({
	count: handleCount,
	test
})
