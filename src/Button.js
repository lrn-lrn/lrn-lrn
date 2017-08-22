import React from 'react';

const Button = (props) => {
    return (
        <div className="button center-text" onClick={props.action} onKeyPress={props.action}>
            {props.text}
        </div>
    );
};

export default Button;