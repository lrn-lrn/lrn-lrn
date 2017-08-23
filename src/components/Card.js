import React from 'react';

const Card = (props) => {
    return (
        <div id="card" className="center-text">
            <h1>{props.word}</h1>
        </div>
    );
};

export default Card;