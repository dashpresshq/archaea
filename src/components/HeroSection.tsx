import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import styled from "styled-components";
import styledComponents from "styled-components";
import { COLORS, SIZES } from "../constants";
import { Spacer } from "../ui-blocks/Spacer";
import { Text } from "../ui-blocks/Text";

export const Root = styledComponents.div`
    // background: url(/assets/images/saas/home-shape.png) center center;
    background: #F0EDFF;
    height: auto;
    width: 100%;
    align-self: center;
    align-items: center !important;
    display: flex !important;
`;

const Heading = styled.div`
  margin-top: 100px;
  line-height: 26px;
  @media (min-width: ${SIZES.tablet}px) {
    margin-top: 100px;
  }
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
              <Text size="2">
                Build your powerful internal tools under 59 seconds
              </Text>
              <Spacer size="xxl" />
              <Spacer size="xxl" />
              <Description>
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap v5 html page.
              </Description>
              {/* Get Started, Video Walkthrough */}
            </Heading>
          </StyledCol>
        </Row>
      </Container>
    </Root>
  );
};
// Introducing the fastest, most efficient internal tool generator.
