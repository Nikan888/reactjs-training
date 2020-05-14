import React from 'react';
import './CardHeader.css';

const CardHeader = (props) => {
    return (
        <div className="Card-Header">
            <div className="checkbox-position">{props.children}</div>
            Caption
        </div>
    );
};

export default CardHeader;