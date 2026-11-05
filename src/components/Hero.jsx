import React from "react";
import { Container, Button } from "../helpers";


function Hero() {
  return (
    <Container>
      <div>
        Hi, my name is <span className="higlight">Abdullah Ansari</span>. I am a Web Developer.
      </div>
      <p>
        I build thoughtful digital experiences where clean design meets reliable, maintainable code.
      </p>
      <Button type="primary" text="Know More" />
    </Container>
  );
}

export default Hero;
