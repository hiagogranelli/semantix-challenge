import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Title, NavList, NavItem, StyledLink } from "./styles";

import iconPageOne from "../../img/checkmarked-circle.png";
import iconPageTwo from "../../img/page-two-icon.png";

export default function Navbar() {
  return (
    <Container>
      <Title>Semantix</Title>
      <NavList>
        <StyledLink exact to="/" activeClassName="active">
          <NavItem>
            <img src={iconPageOne} alt="Page 1" />
            <span>Page 1</span>
          </NavItem>
        </StyledLink>

        <StyledLink to="/page-two" activeClassName="active">
          <NavItem>
            <img src={iconPageTwo} alt="Page 2" />
            <span>Page 2</span>
          </NavItem>
        </StyledLink>
      </NavList>
    </Container>
  );
}
