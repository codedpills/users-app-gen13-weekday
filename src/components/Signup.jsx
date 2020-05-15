import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
      super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <>
        <h3>Sign up Here</h3>
        <form>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="input">
            <button type="submit">Sign up</button>
          </div>
        </form>
        <Link to="/login">Already have an account? Login</Link>
      </>
    );
  }
}

export default Signup;
