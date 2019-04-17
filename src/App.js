import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './Component/Formulaire';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Formulaire/>
        </header>        
      </div>
    );
  }
}

export default App;