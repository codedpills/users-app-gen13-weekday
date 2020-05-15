import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
      this.state = {
        email: "",
        password: "",
      };
    }
  render() {
    return (
      <>
        <h3>Login Here</h3>
        <form>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input">
            <button type="submit">Login</button>
          </div>
        </form>
        <Link to="/signup">Don't have an account? Sign up</Link>
      </>
    );
  }
}

export default Login;
