import React from 'react';
import './CardContent.css';

const CardContent = (props) => {
    console.log("CardContent props")
    console.log(props)
    return <div className="Card-Content">{props.text}</div>
};

export default CardContent;