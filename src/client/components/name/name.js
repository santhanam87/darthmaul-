import React from 'react';
import { useSelector } from 'react-redux';

const AppName = () => {
	const counter = useSelector((state) => state.counter.value);
	return <p>Hello world...{counter}</p>;
};

export default AppName;
