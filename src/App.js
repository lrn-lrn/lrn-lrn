import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Button from './Button.js';

class App extends Component {
  render() {
    return (
      <section id="container">
        <Button text="IDK"/>
        <Card/>
        <Button text="YES"/>
      </section>
    );
  }
}

export default App;