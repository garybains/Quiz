import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  render() {

    axios.get('/')
    .then(function (response) {
      console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });

    axios.get('/g')
    .then(function (response) {
      console.log(response);
      })
    .catch(function (error) {
      console.log(error);
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
