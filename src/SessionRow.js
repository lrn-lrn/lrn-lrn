import React from 'react';

const SessionRow = ({sessions}) => (
    <tr>
        <th>
            session
        </th>

        {Object.keys(sessions).map( ( session, i ) => (
            sessions[session].map( ( response, i ) => (
                <td key={i}>{response.toString()}</td>
            ))
        ))
        }
    </tr>
);

export default SessionRow;