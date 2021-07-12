import React from "react"
import Layout from "./Layout"

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Layout>
          <section id="error-boundary" className="mt-32 text-center mx-auto">
            <h1 className="text-4xl font-bold mb-3">Something went wrong</h1>
            <p>Please try to refresh the page</p>
          </section>
        </Layout>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
