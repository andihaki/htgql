import React, { Component } from "react";
import { AUTH_TOKEN } from "../constants";

class Login extends Component {
  state = {
    login: true, // switch between login or signup
    email: "",
    password: "",
    name: ""
  };

  render() {
    const { login, email, password, name } = this.state;

    return (
      <div>
        <h4 className="mv3">{login ? "LogIn" : "SignUp"}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => this._confirm()}>
            {login ? "Login" : "Create Account"}
          </div>
          <div
            className="pointer button"
            onClick={() =>
              this.setState(prevState => ({ login: !prevState.login }))
            }
          >
            {login ? "need to create an account?" : "already have an account?"}
          </div>
        </div>
      </div>
    );
  }

  _confirm = async () => {
    // ... you'll implement this 🔜
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
