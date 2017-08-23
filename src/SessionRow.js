import React from 'react';
import {emojify} from 'react-emojione';

const SessionRow = ({session, time}) => (
    <tr>
        <th>
            {formatTime(time)}
        </th>
            {session.map( ( response, i ) => (
                <td key={i}>{emojify( response ? ':white_check_mark:' : ':negative_squared_cross_mark:' )}</td>  
            ))}
    </tr>
);

function formatTime(time) {
    var date = new Date(parseInt(time));
    return date.toDateString() + ' @ ' + date.toLocaleTimeString();
}

export default SessionRow;