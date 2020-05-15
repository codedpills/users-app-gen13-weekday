import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { editUser } from "../store/usersActions";
import { Redirect } from "react-router-dom";

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
      gen: props.user.gen,
    };
    this.id = props.match.params.id;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.editUser(this.id, updatedInfo);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.history.push("/");
  };

  render() {
    const {auth} = this.props;
    if(auth.isLoaded && auth.isEmpty) {
      return <Redirect to="/login" />
    }
    return (
      <form onSubmit={this.handleSubmit} className="App__user-form">
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-control">
          <label>Gen</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button type="submit">Update user</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.firestore.ordered.users.find(
    (user) => user.id === ownProps.match.params.id
  ),
  auth: state.firebase.auth
});

const mapDispatchToProps = {
  editUser: editUser,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(["users"])
)(EditForm);
