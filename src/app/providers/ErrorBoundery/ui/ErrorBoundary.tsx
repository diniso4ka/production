import {
    ReactNode, Component, ErrorInfo, Suspense,
} from 'react';
import { PageError } from 'widgets/PageError/ui/PageError';

interface ErrorBoundaryProps{
	children: ReactNode
}

interface ErrorBoundaryState{
	hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) {
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        if (this.state.hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children;
    }
}

export default ErrorBoundary;
