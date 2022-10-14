import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Text } from "../ui-blocks/Text";
import { Spacer } from "../ui-blocks/Spacer";
import styled from "styled-components";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const FEATURES: { title: string; description: string }[] = [
  {
    title: "Users Authentication and Authorization",
    description:
      "As opposed to building from the ground up, You will be tearing down as Hadmean gives you too much features so you will be removing some of it",
  },
  {
    title: "CRUD",
    description: `
      Everything you see is customizable, Hide features, rename labels, order
      things around, dictate how things appear
      `,
  },
  {
    title: "Filters",
    description: `
      Everything you see is customizable, Hide features, rename labels, order
      things around, dictate how things appear
      `,
  },
  {
    title: "Dashboard",
    description: `Hadmean doesn't care about your application language or framework. Just
      your database credentials and you off to admininstrating it.`,
  },
  {
    title: "Relationships",
    description: `Hadmean doesn't care about your application language or framework. Just
      your database credentials and you off to admininstrating it.`,
  },
  {
    title: "Validations",
    description: `Hadmean doesn't care about your application language or framework. Just
      your database credentials and you off to admininstrating it.`,
  },
];

const StyledContainer = styled(Container)`
  padding: 56px 0;
`;

export const ShowCase = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <StyledContainer>
      <Text size="2">Hadmean Features</Text>
      {FEATURES.map(({ description, title }, index) => (
        <Row key={title}>
          <Col lg={6}>
            <img src={`${siteConfig.baseUrl}/img/features/${index + 1}.png`} />
          </Col>
          <Col lg={6}>
            <Text size="3">{title}</Text>
            <Spacer />
            <Text size="4" color="muted">
              {description}
            </Text>
          </Col>
        </Row>
      ))}
    </StyledContainer>
  );
};
