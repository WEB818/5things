import React from "react";
import styled from "styled-components";
import Logo from "./assets/5Things.png";
import NavBar from "../src/components/NavBar/NavBar";
import HomePage from "../src/routes/HomePage";

const LogoNav = styled.img`
  height: 100px;
`;

function App() {
  return (
    <div className="App">
      <LogoNav src={Logo} alt="logo" />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
