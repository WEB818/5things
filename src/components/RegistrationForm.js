//name, username, password

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../services/auth-api-service";

class RegistrationForm extends Component {
  static defaultProps = {
    onRegSuccess: () => {},
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onRegSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className="RegForm__container" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div className="RegForm__label-input">
          <label htmlFor="login-username-input">Username</label>
          <input
            ref={this.firstInput}
            id="login-username-input"
            className="red-input"
            name="username"
            required
          />
        </div>
        <div className="RegForm__label-input">
          <label htmlFor="login-password-input">Password</label>
          <input
            id="login-password-input"
            className="green-input"
            name="password"
            type="password"
            required
          />
        </div>
        <footer className="RegForm__footer">
          <button type="submit">Login</button>Don't have an account?{" "}
          <Link to="/register" className="page-links">
            Sign up!
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
