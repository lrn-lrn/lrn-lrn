import React from 'react';

const SessionRow = ({responses}) => (
    <tr>
    {responses.map((resp, i) => (
        <td key={i}>{resp.toString()}</td>
      ))
    }
    </tr>
);

export default SessionRow;