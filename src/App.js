import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import Button from './Button.js';
import Chart from './Chart.js';

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
      ],
      responses: [],
    };

    this.next = this.next.bind( this );
    this.negative = this.negative.bind( this );
    this.affirmative = this.affirmative.bind( this );
  }

  next() {
    const index = this.state.words.indexOf( this.state.currentWord );
    const nextWord = this.state.words[index + 1];

    this.setState({
      currentWord: nextWord
    });
  }

  negative() {
    console.log( '-' );
    const responses = this.state.responses.map( x => x );
    responses.push(false);
    this.setState({
      responses
    });
    this.next();
  }

  affirmative() {
    console.log( '+' );
    const responses = this.state.responses.map(x => x);
    responses.push(true);
    this.setState({
      responses
    });
    this.next();
  }

  render() {
    return (
      <div>
        {this.state.currentWord !== undefined &&
          <section id="container">
              <Button text="IDK" action={this.negative}/>
              <Card word={this.state.currentWord}/>
              <Button text="YES" action={this.affirmative}/>
          </section>
        }
        {this.state.currentWord === undefined &&
          <Chart 
            words={this.state.words} 
            responses={this.state.responses} 
          />
        }
      </div>
    );
  }
}

export default App;