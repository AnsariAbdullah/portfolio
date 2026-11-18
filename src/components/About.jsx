import React from "react";
import {
  AboutGrid,
  Button,
  Copy,
  PixelPortrait,
  ProfilePanel,
  SectionHeading,
  Window,
  WindowBody,
} from "../styles/Common.styles";
import { WindowHeader } from "../helpers";

function About() {
  return (
    <Window id="about" aria-labelledby="about-heading">
      <WindowHeader title="About_Me.txt" icon="i" />
      <WindowBody>
        <AboutGrid>
          <div>
            <SectionHeading id="about-heading">
              A little bit about me
            </SectionHeading>
            <Copy>
              I'm a web developer focused on building useful, accessible, and
              polished products. I enjoy taking ideas from early sketches to
              dependable experiences that feel great to use.
            </Copy>
            <Copy>
              My everyday toolkit includes JavaScript, React, Node.js, modern
              CSS, and databases. I’m always exploring better ways to turn
              complex problems into simple interfaces.
            </Copy>
            <Button href="/abdullah-ansari-resume.txt" download>
              Resume <span aria-hidden="true">⇩</span>
            </Button>
          </div>
          <ProfilePanel aria-label="Pixel art portrait placeholder">
            <PixelPortrait />
          </ProfilePanel>
        </AboutGrid>
      </WindowBody>
    </Window>
  );
}

export default About;
