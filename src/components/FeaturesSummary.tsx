import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Text } from "../ui-blocks/Text";
import { Spacer } from "../ui-blocks/Spacer";
import styled from "styled-components";

const FEATURES: { title: string; description: string }[] = [
  {
    title: "Setup Under 59 Seconds",
    description:
      "As opposed to building from the ground up, You will be tearing down as Hadmean gives you too much features so you will be removing some of it",
  },
  {
    title: "No Tutorials",
    description: `
      Everything you see is customizable, Hide features, rename labels, order
      things around, dictate how things appear
      `,
  },
  {
    title: "Easy To Customize",
    description: `Hadmean doesn't care about your application language or framework. Just
      your database credentials and you off to admininstrating it.`,
  },
];

const StyledContainer = styled(Container)`
  padding: 56px 0;
`;

export const FeaturesSummary = () => {
  return (
    <StyledContainer>
      <Row>
        {FEATURES.map(({ description, title }) => (
          <Col key={title} lg={4}>
            <Text size="3">{title}</Text>
            <Spacer />
            <Text size="4" color="muted">
              {description}
            </Text>
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
};
