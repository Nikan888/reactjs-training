import React from "react";
import "./CardHeader.css";

const CardHeader = (props) => {
  return (
    <div className="Card-Header">
      {props.isEdit ? (
        <div>
          <input
            className="card-header-edit"
            maxLength="20"
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      ) : (
        props.text
      )}
    </div>
  );
};

export default CardHeader;
