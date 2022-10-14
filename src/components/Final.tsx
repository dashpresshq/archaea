import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Text } from "../ui-blocks/Text";
import { Spacer } from "../ui-blocks/Spacer";
import styled from "styled-components";

const SUPPORTED_DATABASES = ["Postgres", "MySql", "SQLite", "MSSql"];

const StyledContainer = styled(Container)`
  padding: 56px 0;
`;
export const Final = () => {
  return (
    <Container>
      <p>Build your next admin panel with Hadmean</p>
      <p>
        Start working with Landrick that can provide everything you need to
        generate awareness, drive traffic, connect.
      </p>
      <button>Get Started</button>
      <button>Try Demo</button>
    </Container>
  );
};
