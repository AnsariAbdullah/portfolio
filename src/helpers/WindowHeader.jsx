import React from "react";
import {
  AppIcon,
  Control,
  Controls,
  Title,
  TitleBar,
} from "../styles/Common.styles";

function WindowHeader({ icon, title }) {
  return (
    <TitleBar>
      <Title>
        <AppIcon aria-hidden="true">{icon}</AppIcon>
        {title}
      </Title>
      <Controls aria-hidden="true">
        <Control>_</Control>
        <Control>□</Control>
        <Control>×</Control>
      </Controls>
    </TitleBar>
  );
}

export default WindowHeader;
