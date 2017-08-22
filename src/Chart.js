import React from 'react';

const Chart = ({responses}) => (
  <div>{responses.map((resp, i) => (
      <h1 key={i}>{resp.toString()}</h1>
    ))}
  </div>
);

export default Chart;