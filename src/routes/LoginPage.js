import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default class RegistrationPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/home";
    history.push(destination);
  };

  render() {
    return <LoginForm onLoginSuccess={this.handleLoginSuccess} />;
  }
}
