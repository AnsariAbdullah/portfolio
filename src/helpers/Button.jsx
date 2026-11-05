import React from "react";
import styled from "styled-components";

const ButtonComp = styled.a`
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255) rgb(32, 32, 32) rgb(32, 32, 32)
    rgb(255, 255, 255);
  box-shadow: rgb(223, 223, 223) 1px 1px inset,
    rgb(128, 128, 128) -1px -1px inset;
  width: fit-content;
  min-width: 116px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 38px;
  padding: 7px 17px;
  color: rgb(17, 17, 17);
  background: rgb(192, 192, 192);
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

function Button({ text, type, hasIcon, icon = "arrow" }) {
  return (
    <ButtonComp type={type}>
      {text}
      {hasIcon && <span className="icon">{icon}</span>}
    </ButtonComp>
  );
}

export default Button;
