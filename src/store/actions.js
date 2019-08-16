export const ADD_COUNT = 'ADD_COUNT';
export const REDUCE_COUNT = 'REDUCE_COUNT';

export function addCount(count) {
	return {
		type: ADD_COUNT,
		count
	}
}

export function reduceCount(count) {
	return {
		type: REDUCE_COUNT,
		count
	}
}
