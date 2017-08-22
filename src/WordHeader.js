import React from 'react';

const WordHeader = ({words}) => (
    <thead>
        <tr>
            <td></td>
            {words.map((word, i) => (
                <th key={i}>{word}</th>
            ))
            }
        </tr>
    </thead>
);

export default WordHeader;