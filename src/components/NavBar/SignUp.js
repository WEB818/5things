import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const LinkContainer = styled.div`
  position: fixed;
  right: 10%;
  top: 5%;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #188072;
  font-size: 16px;
  font-weight: bold;
`;

export default function SignUp() {
  return (
    <LinkContainer>
      <StyledLink to="/register">Sign Up</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </LinkContainer>
  );
}
