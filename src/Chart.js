import React from 'react';
import WordHeader from './WordHeader.js';
import SessionRow from './SessionRow.js';

const Chart = ({words,sessions}) => (
  <table>
    <WordHeader words={words}/> 
    <tbody>
      <SessionRow sessions={sessions}/>
    </tbody>
  </table>
);

export default Chart;