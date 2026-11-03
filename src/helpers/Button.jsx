import React from "react";
import styled from "styled-components";

const ButtonComp = styled.button``;

function Button({ text, type, hasIcon, icon = "arrow" }) {
  return (
    <ButtonComp type={type}>
      {text}
      {hasIcon && <span className="icon">{icon}</span>}
    </ButtonComp>
  );
}

export default Button;
