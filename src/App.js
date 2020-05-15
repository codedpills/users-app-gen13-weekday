import "./App.css";

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { addUser, deleteUser } from "./store/usersActions";
import { signOut } from "./store/authActions";
import UsersForm from "./components/UsersForm";
import UserInfo from "./components/UserInfo";
import { Redirect } from "react-router-dom";

export class App extends Component {
  addNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  render() {
    const { requesting, requested, users, auth } = this.props;
    if (auth.isLoaded && auth.isEmpty) {
      return <Redirect to="/login" />
    }

    const whatToDisplay =
      requesting.users === true ? (
        <p>Loading...</p>
      ) : requested.users === true && users.length === 0 ? (
        <p>No users</p>
      ) : requested.users === true && users.length > 0 ? (
        users.map((item) => {
          return (
            <UserInfo
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              gen={item.gen}
              removeUser={this.deleteUser}
            />
          );
        })
      ) : null;

    return (
      <div className="App">
        <UsersForm addUser={this.addNewUser} />
        <div className="App__user-info">{whatToDisplay}</div>
        <a onClick={this.props.signOut} href="">Sign out</a>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.firestore.ordered.users,
  requesting: state.firestore.status.requesting,
  requested: state.firestore.status.requested,
  auth: state.firebase.auth
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
  signOut
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(["users"])
)(App);
