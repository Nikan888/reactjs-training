import React from "react";
import "./CardHeader.css";

const CardHeader = (props) => {
  return <div className="Card-Header">{props.text}</div>;
};

export default CardHeader;
