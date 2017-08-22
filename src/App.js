import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Button from './Button.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWord: 'object',
      words: [
        'object literal',
        'variable',
        'boolean',
        'function declaration'
      ]
    };

    this.next = this.next.bind( this );
    this.negative = this.negative.bind( this );
    this.affirmative = this.affirmative.bind( this );
  }

  next() {
    const wordsArr = this.state.words;
    const nextWord = wordsArr[0]; // undefined when wordsArr is empty
    const newWordsArr = wordsArr.slice( 1,wordsArr.length );

    this.setState({
      currentWord: nextWord,
      words: newWordsArr
    });

  }

  negative() {
    console.log( '-' );
    this.next();
  }

  affirmative() {
    console.log( '+' );
    this.next();
  }

  render() {
    return (
      <section id="container">
        <Button text="IDK" action={this.negative}/>
        <Card word={this.state.currentWord}/>
        <Button text="YES" action={this.affirmative}/>
      </section>
    );
  }
}

export default App;