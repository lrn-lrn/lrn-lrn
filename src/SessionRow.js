import React from 'react';

const SessionRow = ({session, time}) => (
    <tr>
        <th>
            {formatTime(time)}
        </th>
            {session.map( ( response, i ) => (
                <td key={i}>{response.toString()}</td>
            ))}
    </tr>
);

function formatTime(time) {
    var date = new Date(parseInt(time));
    return date.toDateString() + ' @ ' + date.toLocaleTimeString();
}

export default SessionRow;