import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../store/authActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.signIn(this.state.email, this.state.password);
    this.setState({ email: "", password: "" });
  };
  render() {
    const { email, password } = this.state;
    const {auth} = this.props;
    if (auth.isLoaded && !auth.isEmpty) {
        return <Redirect to="/" />
    }
    return (
      <>
        <h3>Login Here</h3>
        <form onSubmit={this.handleSubmit}>
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
            <button type="submit">Login</button>
          </div>
        </form>
        <Link to="/signup">Don't have an account? Sign up</Link>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
