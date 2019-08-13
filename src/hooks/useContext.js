import React, { useState, useContext } from 'react';
import ThemeContext from '../ThemeContext';

export function UseContext() {
	const [theme, setTheme] = useState('light');

	function toggleTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return <ThemeContext.Provider value={{theme, toggleTheme}}>
		<ThemeShow />
	</ThemeContext.Provider>
}

function ThemeShow() {
	const context = useContext(ThemeContext);

	return (
		<>
			<span>{context.theme}</span>
			<button onClick={context.toggleTheme}>toggle</button>
		</>
	)
}