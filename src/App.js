import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

class App extends Component {
  render() {
    return (
      <section id="container">
        <Card/>
      </section>
    );
  }
}

export default App;