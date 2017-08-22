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
      currentSession: Date.now(),
      currentWord: 'object',
      words: [
        'object',
        'object literal',
        'variable',
        'boolean',
        'function declaration'
      ],
      sessions: {},
    };

    this.next = this.next.bind( this );
    this.negative = this.negative.bind( this );
    this.affirmative = this.affirmative.bind( this );
  }

  componentDidMount() {
    this.setState({
      sessions: {
        [this.state.currentSession]: []
      }
    });
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
    const sessionResponses = this.state.sessions[this.state.currentSession].map( x => x );
    sessionResponses.push(false);

    this.setState({
      sessions: {
        [this.state.currentSession]: sessionResponses
      }
    });
    this.next();
  }

  affirmative() {
    console.log( '+' );
    const sessionResponses = this.state.sessions[this.state.currentSession].map( x => x );
    sessionResponses.push(true);
    this.setState({
      sessions: {
        [this.state.currentSession]: sessionResponses
      }
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
            sessions={this.state.sessions}
          />
        }
      </div>
    );
  }
}

export default App;