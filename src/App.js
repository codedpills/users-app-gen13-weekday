import "./App.css";

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { addUser, deleteUser } from "./store/usersActions";
import UsersForm from "./components/UsersForm";
import UserInfo from "./components/UserInfo";

export class App extends Component {
  addNewUser = (newUser) => {
    this.props.addUser(newUser);
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  render() {
    const { requesting, requested, users } = this.props;

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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.firestore.ordered.users,
  requesting: state.firestore.status.requesting,
  requested: state.firestore.status.requested,
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(["users"])
)(App);
