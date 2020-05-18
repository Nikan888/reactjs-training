import React from 'react';
import './CardHeader.css';

const CardHeader = (props) => {
    return (
        <div className="Card-Header">
            <div className="checkbox-position">{props.checkbox}</div>
            {props.text}
        </div>
    );
};

export default CardHeader;