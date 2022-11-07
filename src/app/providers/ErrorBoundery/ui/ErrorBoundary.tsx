import {ReactNode, Component, ErrorInfo} from 'react';
import {PageError} from 'widgets/PageError/ui/PageError';

interface ErrorBoundaryProps{
	children: ReactNode
}

interface ErrorBoundaryState{
	hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps,ErrorBoundaryState> {
	constructor(props:ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error:Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error:Error, errorInfo:ErrorInfo) {
		// You can also log the error to an error reporting service
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <PageError/>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary
