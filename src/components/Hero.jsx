import React from "react";
import styled from "styled-components";
import { Button } from "../helpers";

const HeroWrapper = styled.section`
	.higlight{
		color: blue;
	}
`;

function Hero() {
  return (
    <HeroWrapper>
      <div>
        Hi, my name is <span className="higlight">Abdullah Ansari</span>. I am a Web Developer.
      </div>
      <p>
        I build thoughtful digital experiences where clean design meets reliable, maintainable code.
      </p>
      <Button type="primary" text="Know More" />
    </HeroWrapper>
  );
}

export default Hero;
