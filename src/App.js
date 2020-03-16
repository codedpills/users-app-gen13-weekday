import "./App.css";

import React, { Component } from "react";
import UsersForm from "./components/UsersForm";
import UserInfo from "./components/UserInfo";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Ahmed Zaky",
          email: "ahmed@email.com",
          gen: 1
        },
        {
          name: "Emmanuel Adebayor",
          email: "emmanuel@email.com",
          gen: 4
        },
        {
          name: "Asamoah Gyan",
          email: "asamoah@email.com",
          gen: 7
        },
        {
          name: "Stephen Appiah",
          email: "stephen@email.com",
          gen: 7
        }
      ]
    };
  }

  addNewUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser]
    });
  };

  render() {
    return (
      <div className="App">
        {/* <h1>FOOTBALLERS DATABASE</h1> */}
        <UsersForm addUser={this.addNewUser} />
        <div className="App__user-info">
          {this.state.users.map((item, index) => {
            return (
              <UserInfo
                key={index}
                name={item.name}
                email={item.email}
                gen={item.gen}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
