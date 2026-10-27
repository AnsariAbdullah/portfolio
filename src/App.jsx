import React from "react";
import styled from "styled-components";
import { Hero, About, Projects, Contact, Footer } from "./components";

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
