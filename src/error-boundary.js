import React from 'react';
import {ThrowError} from './throwError';

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);

    this.state = { 
			hasError: false, 
			error: null,
			errorInfo: null
		};
  }

  componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

	// static getDerivedStateFromError(error) {
	// 	console.log(arguments)
	// 	// 更新 state 使下一次渲染能够显示降级后的 UI
	// 	return { hasError: true };
	// }

	render() {
		if (this.state.error) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

		return <ThrowError />;
	}
}