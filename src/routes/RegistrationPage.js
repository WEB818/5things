import React, { Component } from "react";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/RegistrationForm";
import AuthApiService from "../services/auth-api-service";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  setUser = (user) => {
    this.setState({ user });
  };

  handleRegistrationSuccess = (user) => {
    const { history } = this.props;
    history.push("/home");
  };

  render() {
    return (
      <RegistrationForm
        onRegistrationSuccess={this.handleRegistrationSuccess}
      />
    );
  }
}
