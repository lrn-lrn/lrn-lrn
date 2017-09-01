import React, { Component } from 'react';
import '../App.css';
import Card from './Card.js';
import Button from './Button.js';
import Chart from './Chart.js';
import Modal from './Modal.js';

import words from '../data/words.js';
import {emojify} from 'react-emojione';


class App extends Component {
  constructor() {
    super();
    this.state = {
      timeStamp: Date.now(),
      currentSession: [],
      currentWord: 'HTML',
      words,
      sessions: {},
      modalOpen: true
    };

    this.next = this.next.bind( this );
    this.negative = this.negative.bind( this );
    this.affirmative = this.affirmative.bind( this );
    this.closeModal = this.closeModal.bind( this );

    document.addEventListener( 'keydown', this.keyHandler.bind(this) );
  }

  componentDidMount() {
    if ( !localStorage.sessions ) { return; }
    const oldSessions = JSON.parse(localStorage.sessions);
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
    } else if ( e.keyCode === 39 ) {
      this.affirmative();
    }
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <div>
        {this.state.modalOpen &&
          <Modal action={this.closeModal}>
            <h1>Lrn Lrn</h1>
            <h2>Alchemy Code Lab Student Self-assesment</h2>
            {/* TODO add gif of app in action */}
            <h2>How to Play</h2>
            <ul>
              <li>You'll be shown a vocab word or concept.</li>
              <li>if you are comfortable with the topic, click the green checkmark (or your right arrow key)</li>
              <li>if you are <strong>not</strong> comfortable with the topic, click the red x-mark (or your left arrow key)</li>
            </ul>
          </Modal>
        }
        {this.state.currentWord !== undefined &&
          <section id="container">
              <Button text={emojify(':see_no_evil:')} action={this.negative}/>
              <Card word={this.state.currentWord}/>
              <Button text={emojify(':star2:')} action={this.affirmative}/>
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