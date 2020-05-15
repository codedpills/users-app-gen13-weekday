import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { signUpWithEmail } from '../store/authActions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUpWithEmail(this.state.email, this.state.password)
    this.setState({ username: "", email: "", password: "" });
  };
  render() {
    const { username, email, password } = this.state;
    const {auth} = this.props;
    if (auth.isLoaded && !auth.isEmpty) {
        return <Redirect to="/" />
    }
    return (
      <>
        <h3>Sign up Here</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
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

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

const mapDispatchToProps = {
    signUpWithEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
