import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import styled from "styled-components";
import { Input, Button } from "./Utils/Utils";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;
class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });

    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
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

        <Input name="username" required placeholder="Username" />

        <Input
          name="password"
          type="password"
          required
          placeholder="Password"
        />

        <Button type="submit">Login</Button>
        <div>
          Don't have an account? <Link to="/register">Sign up!</Link>
        </div>
      </Form>
    );
  }
}

export default LoginForm;
