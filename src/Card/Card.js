import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className="card-wrapper">
            <div style={{color: props.cardColor}} className="Card">{props.children}</div>
        </div>
    );
};

export default Card;