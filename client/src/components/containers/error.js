import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log("Error: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1>Oops, something went wrong.</h1>
          <h3>Try again later.</h3>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;