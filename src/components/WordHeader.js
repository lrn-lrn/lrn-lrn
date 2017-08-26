import React from 'react';

const WordHeader = ({words}) => (
    <thead>
        <tr>
            <td></td>
            {words.map((word, i) => (
                <th key={i} className="word tooltip">{word}
                    <Tooltip word={word}/>
                </th>
            ))
            }
        </tr>
    </thead>
);


const Tooltip = ({ word }) => (
    <span className="tooltiptext">More Info about {word}</span>
)
export default WordHeader;