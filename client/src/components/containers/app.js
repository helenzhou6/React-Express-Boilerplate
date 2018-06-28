import React from "react";

import { theme } from "../styled/theme";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import Footer from "./footer";
import ErrorBoundary from "./error";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <ErrorBoundary>
          <h1>Hello World!</h1>
        </ErrorBoundary>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;