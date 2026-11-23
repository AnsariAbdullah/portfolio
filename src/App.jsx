import {
  GlobalStyle,
  Desktop,
  Page,
} from "./styles/Common.styles.js";
import { About, Contact, Footer, Hero, Projects } from "./components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Desktop>
        <Page>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </Page>
      </Desktop>
      <Footer />
    </>
  );
}
