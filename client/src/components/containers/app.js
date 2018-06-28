import React from "react";

import { theme } from "../styled/theme";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import Footer from "./footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <h1>Hello World!</h1>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;