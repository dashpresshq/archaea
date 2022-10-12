import React from "react";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";

export const Root = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: transparent;
  border: 0;
  transition: all 0.5s ease;
`;

export const Header = () => {
  return (
    <Root>
      <Container>Fooo</Container>
    </Root>
  );
};
