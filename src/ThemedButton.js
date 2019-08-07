import React from 'react';
import ThemeContext from './ThemeContext';

export function ThemedButton(params) {
	// 指定 ContextType 读取当前的 theme Context。
	// React 会往上找到最近的 theme Provider，然后使用它的值。
	// 在这个例子中，当前的 theme 值为 “dark”。
	return (
		<ThemeContext.Consumer>
			{({theme, toggleTheme}) => <button onClick={toggleTheme}>{theme}</button>}
		</ThemeContext.Consumer>
	);
}