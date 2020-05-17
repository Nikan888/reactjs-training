import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log("Card props")
    console.log(props)
    let cardColor
    if (props.variant === "default") {
        cardColor = "green"
    } else if (props.variant === "checked") {
        cardColor = "red"
    }
    return (
        <div style={{color: cardColor}} className="Card">{props.children}</div>
    );
};

export default Card;