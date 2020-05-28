import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu, StyledBurger } from "./NavBar.styled";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Bad Script", cursive;
  font-size: 30px;
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink to="/journal" onClick={() => setOpen(!open)}>
        Journal
      </StyledLink>
      <StyledLink to="/stats" onClick={() => setOpen(!open)}>
        View Stats
      </StyledLink>
      <StyledLink to="/analysis" onClick={() => setOpen(!open)}>
        Word Analysis
      </StyledLink>
      <StyledLink to="/summary" onClick={() => setOpen(!open)}>
        Mood Summary
      </StyledLink>
    </StyledMenu>
  );
};
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default NavBar;
