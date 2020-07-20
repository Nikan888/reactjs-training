import React from "react";
import "./CardContent.css";

const CardContent = (props) => {
  return (
    <div className="Card-Content">
      {props.isEditMode ? (
        <div>
          <textarea
            className="card-body-edit"
            value={props.text}
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
