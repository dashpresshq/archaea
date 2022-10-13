import React from "react";
import styled from "styled-components";
import { Container } from "styled-bootstrap-grid";
import { Stack } from "../ui-blocks/Stack";
import { COLORS, SIZES } from "../constants";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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

const Logo = styled.a`
  float: left;
  color: ${COLORS.text} !important;
  font-weight: 700;
  font-size: 24px;
  margin-right: 15px;
  padding: 0 0 6px;
  letter-spacing: 1px;
  line-height: 68px;
`;

const ActionList = styled.ul`
  float: right;
  line-height: 74px;
  @media (min-width: ${SIZES.desktop}px) {
    padding-left: 15px;
    margin-left: 15px;
  }
`;

const Navigation = styled.div`
  display: none;
  @media (min-width: ${SIZES.desktop}px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  @media (min-width: ${SIZES.desktop}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavMenuList = styled.li`
  float: left;
  display: block;
  position: relative;
  margin: 0 10px;
`;

const NavMenuListAnchor = styled.a`
  display: block;
  color: ${COLORS.text} !important;
  font-size: 14px;
  background-color: transparent !important;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 24px;
  text-transform: uppercase;
  // font-family: var(--bs-font-sans-serif);
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: ${SIZES.desktop}px) {
    padding-top: 25px;
    padding-bottom: 25px;
    min-height: 62px;
  }
`;

export const Header = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Root>
      <Container>
        <Logo href="/">
          <img height={24} src={`${siteConfig.baseUrl}/img/logo.png`} />
        </Logo>
        <Navigation>
          <NavMenu>
            <NavMenuList>
              <NavMenuListAnchor href="/docs">Docs</NavMenuListAnchor>
            </NavMenuList>
            <NavMenuList>
              <NavMenuListAnchor href="/docs">Blog</NavMenuListAnchor>
            </NavMenuList>
            <NavMenuList>
              <NavMenuListAnchor href="/docs">Roadmap</NavMenuListAnchor>
            </NavMenuList>
            <NavMenuList>
              <NavMenuListAnchor href="/docs">Demo</NavMenuListAnchor>
            </NavMenuList>
          </NavMenu>
        </Navigation>
      </Container>
    </Root>
  );
};

// Discord
// twitter
// Github
