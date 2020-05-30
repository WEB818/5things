import React from "react";

import styled from "styled-components";

const Container = styled.div``;
const Header = styled.h1`
  text-align: center;
`;

export default function LandingPage() {
  return (
    <Container>
      <Header>What 5 Things will you do today?</Header>
    </Container>
  );
}
