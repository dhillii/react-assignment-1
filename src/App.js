import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import './App.css';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    usernames: [
      {username: 'Dave'},
      {username: 'Baron'}
    ]
  }

  userNameHandler = (event) => {
    this.setState({
      usernames: [
        {username: event.target.value},
        {username: 'Baron'}
      ]
    })
  }

 

  render() {


    return (
      <div className="App">

        <UserInput
        username={this.state.usernames[0].username}
        changed={this.userNameHandler}/>

        <UserOutput
        username={this.state.usernames[0].username}/>

      </div>
    );
  }
}

export default App;
