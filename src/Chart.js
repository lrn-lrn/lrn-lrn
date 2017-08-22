import React from 'react';
import SessionRow from './SessionRow.js';

// Chart will render WordCol & SessRow
// WordCol/SessRow render <tr><td> 
const Chart = ({words,responses}) => (
  <table>
    <tbody>
      {/* <WordHeader words={words}/> */}
      <SessionRow responses={responses}/>
    </tbody>
  </table>
);

export default Chart;