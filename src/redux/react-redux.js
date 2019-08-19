import React, { useState, useCallback } from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { addCount, reduceCount } from '../store/actions';
import { handleCount } from '../store/reducers';

// 生成展示组件
const Calc = ({ count, add, reduce }) => {
	const [value, setValue] = useState(0);

	const handleChange = useCallback(e => {
		setValue(parseInt(e.target.value));
	}, [setValue])

	const handleAdd = useCallback(e => {
		add(parseInt(value));
	}, [value, add])

	const handleReduce = useCallback(e => {
		reduce(parseInt(value));
	}, [value, reduce])

	return (
		<>
			<span>count: {count}</span>
			<input value={value} onChange={handleChange} type="text" />
			<button onClick={handleAdd}>add</button>
			<button onClick={handleReduce}>reduce</button>
		</>
	)
}

Calc.propTypes = {
	count: PropTypes.number.isRequired,
	add: PropTypes.func.isRequired,
	reduce: PropTypes.func.isRequired
}

// 生成容器组件
const mapStateToProps = state => {
	return {
		count: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		add: count => {
			dispatch(addCount(count))
		},
		reduce: count => {
			dispatch(reduceCount(count))
		}
	}
}

const CountCalc = connect(
	mapStateToProps,
	mapDispatchToProps
)(Calc)

// provide
const store = createStore(handleCount);
console.log(store.getState())

export default function () {
	return (
		<Provider store={store}>
			<CountCalc />
		</Provider>
	)
}