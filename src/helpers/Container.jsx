import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.section`
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255) rgb(32, 32, 32) rgb(32, 32, 32)
    rgb(255, 255, 255);
  box-shadow: rgb(223, 223, 223) 1px 1px inset,
    rgb(128, 128, 128) -1px -1px inset;
  scroll-margin-top: 20px;
  background: rgb(192, 192, 192);
  padding: 3px;
  margin-bottom: 28px;
  .task-bar {
    min-height: 29px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 3px 4px 3px 7px;
    color: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgb(0, 0, 128) 0%,
      rgb(10, 77, 161) 68%,
      rgb(16, 132, 208) 100%
    );
    .section-header {
      display: flex;
      align-items: center;
      gap: 7px;
      margin: 0px;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.01em;
      .header-icon {
        border-width: 2px;
        border-style: solid;
        border-color: rgb(255, 255, 255) rgb(32, 32, 32) rgb(32, 32, 32)
          rgb(255, 255, 255);
        box-shadow: rgb(223, 223, 223) 1px 1px inset,
          rgb(128, 128, 128) -1px -1px inset;
        width: 17px;
        height: 17px;
        display: inline-grid;
        place-items: center;
        flex: 0 0 auto;
        color: rgb(0, 0, 0);
        background: rgb(241, 196, 15);
        font-family: monospace;
        font-size: 10px;
        line-height: 1;
      }
    }
  }
`;
function Container({ children }) {
  return (
    <ContainerWrapper>
      <div class="task-bar">
        <h2 class="section-header">
          <span class="header-icon">A</span>
          Welcome.exe
        </h2>
        <div class="sc-gKzZKs ckMwE">
          {/* <span class="sc-iCoJwv fiPIAN">_</span>
          <span class="sc-iCoJwv fiPIAN">□</span>
          <span class="sc-iCoJwv fiPIAN">×</span> */}
        </div>
      </div>

      {children}
    </ContainerWrapper>
  );
}

export default Container;
