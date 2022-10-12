import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import styledComponents from "styled-components";
import { COLORS, SIZES } from "../constants";

export const Root = styledComponents.div`
    background: url(/assets/images/saas/home-shape.png) center center;
    height: auto;
    align-self: center;
    align-items: center!important;
    display: flex!important;
`;

const Heading = styled.div`
  margin-top: 100px;
  line-height: 26px;
  @media (min-width: ${SIZES.tablet}px) {
    margin-top: 100px;
  }
`;

const Title = styled.h1`
  font-size: 45px !important;
  letter-spacing: 1px;
  margin-bottom: 1rem !important;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 600px;
  color: ${COLORS.muted} !important;
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
              <Title>Build fast, released quickly.</Title>

              <Description>
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap v5 html page.
              </Description>
            </Heading>
          </StyledCol>
        </Row>
      </Container>
    </Root>
  );
};
