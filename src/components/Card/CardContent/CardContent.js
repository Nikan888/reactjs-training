import React from "react";
import "./CardContent.css";

const CardContent = (props) => {
  return (
    <div className="Card-Content">
      {props.isEdit ? (
        <div>
          <textarea
            className="card-body-edit"
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

export default CardContent;
