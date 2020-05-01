import "./App.css";

import React, { Component } from "react";
import { connect } from 'react-redux';
import { addUser, deleteUser } from './store/usersActions';
import UsersForm from "./components/UsersForm";
import UserInfo from "./components/UserInfo";

export class App extends Component {

  addNewUser = newUser => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id);
  }

  render() {
    return (
      <div className="App">
        {/* <h1>FOOTBALLERS DATABASE</h1> */}
        <UsersForm addUser={this.addNewUser} />
        <div className="App__user-info">
          {this.props.users.map((item) => {
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
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
