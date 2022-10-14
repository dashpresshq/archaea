import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Text } from "../ui-blocks/Text";
import { Spacer } from "../ui-blocks/Spacer";
import styled from "styled-components";

const SUPPORTED_DATABASES = ["Postgres", "MySql", "SQLite", "MSSql"];

const StyledContainer = styled(Container)`
  padding: 56px 0;
`;

export const Supported = () => {
  return (
    <StyledContainer>
      <Text size="2"> Supported Database </Text>
      {SUPPORTED_DATABASES.map((database) => {
        return <Text key={database}>{database}</Text>;
      })}
    </StyledContainer>
  );
};
