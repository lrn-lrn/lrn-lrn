import React from 'react';

const Modal = (props) => {
    return (
        <div id="modal" onClick={props.action}>
            <article>
                {props.children}              
            </article>
        </div>
    );
};

export default Modal;