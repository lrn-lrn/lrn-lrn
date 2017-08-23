import React from 'react';
import WordHeader from './WordHeader.js';
import SessionRow from './SessionRow.js';

const Chart = ({words, sessions}) => (
  <table>
    <WordHeader words={words}/>
    <tbody>
      {Object.keys(sessions).map((key, i) => (
        <SessionRow session={sessions[key]} time={key}/>
      ))}
    </tbody>
  </table>
    );

export default Chart;