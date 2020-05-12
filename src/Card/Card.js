import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="card-wrapper">
            <div className="Card">{props.children}</div>
        </div>
    );
};

export default Card;