import "./App.css";

import React, { Component } from "react";

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
      ],
      name: '',
      email: '',
      gen: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
    console.log(this.state.name);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen
    }
    this.setState({
      users: [...this.state.users, newUser],
      name: '',
      email: '',
      gen: ''
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>FOOTBALLERS DATABASE</h1> */}
        <form onSubmit={this.handleSubmit} className="App__user-form">
          <div className="form-control">
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-control">
            <label>Gen</label>
            <input type="number" name="gen" value={this.state.gen} onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Add user</button>
          </div>
        </form>
        <div className="App__user-info">
        {this.state.users.map(item => {
          return (
            <div>
              <h4>Name: {item.name}</h4>
              <p>Email: {item.email}</p>
              <p>Gen: {item.gen}</p>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default App;
