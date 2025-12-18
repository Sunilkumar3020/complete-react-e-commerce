import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    // Update state so the next render shows fallback UI
    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    // Log error details
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            console.log(this.props.fallback)
            return this.props.fallback || <h2>Something went wrong.</h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;