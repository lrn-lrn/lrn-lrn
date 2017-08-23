import React from 'react';
import WordHeader from './WordHeader.js';
import SessionRow from './SessionRow.js';

const Chart = ({words, sessions}) => (
  <table>
    <WordHeader words={words}/>
    <tbody>
      {Object.keys(sessions).reverse().map((key, i) => (
        <SessionRow key={i} session={sessions[key]} time={key}/>
      ))}
    </tbody>
  </table>
    );

export default Chart;