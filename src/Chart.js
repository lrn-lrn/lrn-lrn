import React from 'react';
import WordHeader from './WordHeader.js';
import SessionRow from './SessionRow.js';

// Chart will render WordCol & SessRow
// WordCol/SessRow render <tr><td> 
const Chart = ({words,responses}) => (
  <table>
    <WordHeader words={words}/> 
    <tbody>
      <SessionRow responses={responses}/>
    </tbody>
  </table>
);

export default Chart;