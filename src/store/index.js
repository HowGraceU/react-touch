import { createStore } from 'redux';
import todoApp from './reducers';
import { addCount, reduceCount } from './actions';

let store = createStore(todoApp);
const unsubscribe = store.subscribe(() =>
	console.log(store.getState())
)

console.log(store.getState())

store.dispatch(addCount(1));
store.dispatch(addCount(3));
store.dispatch(reduceCount(32));

unsubscribe();

store.dispatch(reduceCount(0));
store.dispatch(addCount(13));

console.log(store.getState())
