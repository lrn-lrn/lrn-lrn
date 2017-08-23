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
      timeStamp: Date.now(),
      currentSession: [],
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

    document.addEventListener( 'keydown', this.keyHandler.bind(this) );
  }

  componentDidMount() {
    const oldSessions = JSON.parse(localStorage.sessions);
    if ( !oldSessions ) { return; }
    this.setState({
      sessions: {
        ...oldSessions
      }
    });
  }

  next() {
    const index = this.state.words.indexOf( this.state.currentWord );
    const nextWord = this.state.words[index + 1];

    this.setState({
      currentWord: nextWord
    });

    if(nextWord === undefined) {
      this.setState({
        sessions: {
          ...this.state.sessions, 
          [this.state.timeStamp]: this.state.currentSession
        } 
    }, () => localStorage.sessions = JSON.stringify(this.state.sessions));

    }
  }

  negative() {
    console.log( '-' );
    const sessionResponses = this.state.currentSession.map( x => x );

    sessionResponses.push(false);

    this.setState({
      currentSession: sessionResponses
    }, this.next);
  }

  affirmative() {
    console.log( '+' );
    const sessionResponses = this.state.currentSession.map( x => x );

    sessionResponses.push(true);

    this.setState({
      currentSession: sessionResponses
    }, this.next);
    
  }

  keyHandler(e) {
    if ( this.state.currentSession.length === this.state.words.length ) { return; }
    
    if ( e.keyCode === 37 ) {
      this.negative();
    } else if ( e.keyCode == 39 ) {
      this.affirmative();
    }
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
        <section id="chart">
          <Chart 
            words={this.state.words} 
            sessions={this.state.sessions}
          />
        </section>
        }
      </div>
    );
  }
}

export default App;