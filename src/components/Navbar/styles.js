import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 105px;
  height: 100vh;
  display: flex;
  background: linear-gradient(180deg, #000 0%, #b5b5b5 100%);
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 45px;
`;

export const NavList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  flex-direction: column;
  justify-content: center;
`;

export const NavItem = styled.li`
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;

  img {
    margin-bottom: 10px;
  }

  span {
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const StyledLink = styled(NavLink).attrs({
  activeClassName: "active",
})`
  &.active {
    background: rgba(255, 255, 255, 0.2);
  }
`;
