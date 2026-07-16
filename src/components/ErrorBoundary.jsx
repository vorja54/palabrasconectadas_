import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-gray-900">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Algo salió mal
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ocurrió un error inesperado. Intenta recargar la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
            >
              Recargar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}