import React, { Component } from 'react';
import logo from './logo.svg';
import ListTimer from './components/timer.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timers: [],
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <h1>Liste des choronomètres</h1>
        <fieldset>
            <ListTimer/>       
          </fieldset>
        </div>       
      </div>
    );
  }
}

export default App;
