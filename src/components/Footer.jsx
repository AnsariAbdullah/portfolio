import React from "react";
import { Taskbar, TaskLinks, Clock } from "../styles/Common.styles";

function Footer() {
  return (
    <Taskbar>
      {/* <StartButton>
          <span aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          Start
        </StartButton> */}
      <TaskLinks aria-label="Social links">
        <a href="https://github.com/AnsariAbdullah" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/abdullah-ansari-375685124/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </TaskLinks>
      <Clock>Portfolio © 2026</Clock>
    </Taskbar>
  );
}

export default Footer;
