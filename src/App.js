import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Logo from "./assets/5Things.png";
import NavBar from "../src/components/NavBar/NavBar";
import HomePage from "../src/routes/HomePage";
import SignUp from "../src/components/NavBar/SignUp";
import LandingPage from "../src/routes/LandingPage";
import PrivateRoute from "../src/components/Routes/PrivateRoute";
import PublicOnlyRoute from "../src/components/Routes/PublicOnlyRoute";
import RegistrationPage from "../src/routes/RegistrationPage";
import LoginPage from "../src/routes/LoginPage";

const Container = styled.div``;

const LogoNav = styled.img`
  height: 100px;
  margin-top: -10px;
  margin-left: 30px;
`;

class App extends Component {
  renderNavRoutes() {
    return (
      <>
        <Link to="/">
          <LogoNav src={Logo} alt="logo" />
        </Link>

        <PublicOnlyRoute path={"/"} component={SignUp} />
        <PrivateRoute path={"/"} component={NavBar} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <Switch>
        <Route exact path={"/"} component={LandingPage} />
        <Route path={"/register"} component={RegistrationPage} />
        <Route path={"/login"} component={LoginPage} />
        <PrivateRoute path="/home" component={HomePage} />
      </Switch>
    );
  }

  render() {
    return (
      <Container>
        {this.renderNavRoutes()}
        {this.renderMainRoutes()}
      </Container>
    );
  }
}

export default App;
