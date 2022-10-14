import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import styledComponents from "styled-components";
import { COLORS, SIZES } from "../constants";
import { Spacer } from "../ui-blocks/Spacer";
import { Text } from "../ui-blocks/Text";

export const Root = styledComponents.div`
// background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='50.41' height='87' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M25.3 87L12.74 65.25m0 14.5h-25.12m75.18 0H37.68M33.5 87l25.28-43.5m-50.23 29l4.19 7.25L16.92 87h-33.48m33.48 0h16.75-8.37zM8.55 72.5L16.92 58m50.06 29h-83.54m79.53-50.75L50.4 14.5M37.85 65.24L50.41 43.5m0 29l12.56-21.75m-50.24-14.5h25.12zM33.66 29l4.2 7.25 4.18 7.25M33.67 58H16.92l-4.18-7.25M-8.2 72.5l20.92-36.25L33.66 0m25.12 72.5H42.04l-4.19-7.26L33.67 58l4.18-7.24 4.19-7.25M33.67 29l8.37-14.5h16.74m0 29H8.38m29.47 7.25H12.74M50.4 43.5L37.85 21.75m-.17 58L25.12 58M12.73 36.25L.18 14.5M0 43.5l-12.55-21.75M24.95 29l12.9-21.75M12.4 21.75L25.2 0M12.56 7.25h-25.12m75.53 0H37.85M58.78 43.5L33.66 0h33.5m-83.9 0h83.89M33.32 29H16.57l-4.18-7.25-4.2-7.25m.18 29H-8.37M-16.74 0h33.48l-4.18 7.25-4.18 7.25H-8.37m8.38 58l12.73-21.75m-25.3 14.5L0 43.5m-8.37-29l21.1 36.25 20.94 36.24M8.37 72.5H-8.36'  stroke-width='1' stroke='hsla(258.5,59.4%,59.4%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
    height: auto;
    width: 100%;
    align-self: center;
    align-items: center !important;
    display: flex !important;
`;

const Heading = styled.div`
  @media (min-width: ${SIZES.tablet}px) {
    margin-top: 100px;
  }
`;

const StyledCol = styled(Col)`
  text-align: center !important;
  padding-top: 0 !important;
  margin-top: 0 !important;
  @media (min-width: ${SIZES.tablet}px) {
    padding-top: 3rem !important;
    margin-top: 3rem !important;
  }
`;

export const HeroSection = () => {
  return (
    <Root>
      <Container>
        <Row>
          <StyledCol>
            <Heading>
              <Text size="2">
                Easy to Setup, Easy to Manage, Easy to Use internal tools
              </Text>
              <Spacer size="xxl" />
              <Spacer size="xxl" />
              <Text color="muted" size="3">
                Fully featured, Open source, Nocode internal tool generator
              </Text>
              <Spacer size="xxl" />
              <Spacer size="xxl" />
              <button>Get Started</button>
              <button>Try Demo</button>
              {/* <button>Video Walkthrough</button> */}
            </Heading>
          </StyledCol>
        </Row>
      </Container>
    </Root>
  );
};
