//name, username, password

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input, Button } from "./Utils/Utils";
import AuthApiService from "../services/auth-api-service";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;
export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, name, password } = event.target;

    this.setState({ error: null });

    AuthApiService.postUser({
      username: username.value,
      name: name.value,
      password: password.value,
    })
      .then((user) => {
        username.value = "";
        name.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>

        <Input name="name" type="text" required placeholder="First name" />
        <Input name="username" type="text" required placeholder="Username" />
        <Input
          name="password"
          type="password"
          required
          placeholder="Password"
        />

        <Button type="submit">Create an Account</Button>
      </Form>
    );
  }
}
