import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <UserOutput
        username="Dave"/>

        <UserOutput
        username="Baron"/>
        
      </div>
    );
  }
}

export default App;
