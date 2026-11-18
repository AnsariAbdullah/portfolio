import React from "react";
import { WindowHeader } from "../helpers";
import {
  Button,
  Eyebrow,
  HeroBody,
  HeroHeading,
  HeroSubline,
  StatusBar,
  Window,
} from "../styles/Common.styles";

function Hero() {
  return (
    <Window aria-labelledby="hero-title">
      <WindowHeader title="Welcome.exe" icon="A" />
      <HeroBody>
        <Eyebrow>C:\Users\Abdullah\Portfolio</Eyebrow>
        <HeroHeading id="hero-title">
          Hi, my name is Abdullah Ansari.
          <span>I am a Web Developer.</span>
        </HeroHeading>
        <HeroSubline>
          I build thoughtful digital experiences for the modern web—one clean
          component at a time.
        </HeroSubline>
        <Button href="#about">
          Know More <span aria-hidden="true">↓</span>
        </Button>
      </HeroBody>
      <StatusBar>
        <span>Ready</span>
        <span>Last updated: Today</span>
      </StatusBar>
    </Window>
  );
}

export default Hero;
