import React from 'react';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 Context（“light”为默认值）。
import { ThemedButton } from "./ThemedButton";
import ThemeContext from './ThemeContext';

const themes = {
	light: 'light',
	dark: 'dark'
}

export class Context extends React.Component {
	constructor(props) {
		super(props);

		this.toggleTheme = () => {
			this.setState(state => ({
				theme:
					state.theme === themes.dark
						? themes.light
						: themes.dark,
			}));
		};

		// State 也包含了更新函数，因此它会被传递进 Context provider。
		this.state = {
			theme: themes.light,
			toggleTheme: this.toggleTheme,
		};
	}

	render() {
		// 整个 state 都被传递进 provider
		return (
			<ThemeContext.Provider value={this.state}>
				<ThemedButton />
			</ThemeContext.Provider>
		);
	}
}
