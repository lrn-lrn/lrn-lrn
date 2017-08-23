import React from 'react';

const SessionRow = ({session, time}) => (
    <tr>
        <th>
            {time}
        </th>
            {session.map( ( response, i ) => (
                <td key={i}>{response.toString()}</td>
            ))}
    </tr>
);

export default SessionRow;