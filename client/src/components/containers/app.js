import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 20rem;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Wrapper>
      <h1>Hello World</h1>
    </Wrapper>
  );
};

export default App;