import React from "react";
import {
  Button,
  ContactBody,
  Copy,
  SectionHeading,
  StatusBar,
  Window,
} from "../styles/Common.styles";
import { WindowHeader } from "../helpers";

function Contact() {
  return (
    <Window aria-labelledby="contact-heading">
      <WindowHeader title="Contact.exe" icon="@" />
      <ContactBody>
        <div>
          <SectionHeading id="contact-heading">
            Let's make something good.
          </SectionHeading>
          <Copy>
            Have a project, an opportunity, or just want to say hello? My inbox
            is always open.
          </Copy>
        </div>
        <Button href="mailto:hello@abdullahansari.dev">
          Send an Email <span aria-hidden="true">→</span>
        </Button>
      </ContactBody>
      <StatusBar>
        <span>Internet connection: Online</span>
        <span>No forms required</span>
      </StatusBar>
    </Window>
  );
}

export default Contact;
