import React from 'react';
import './CardHeader.css';

const CardHeader = (props) => {
    console.log("CardHeader props")
    console.log(props)
    return (
        <div className="Card-Header">
            <div className="checkbox-position">{props.checkbox}</div>
            {props.text}
        </div>
    );
};

export default CardHeader;