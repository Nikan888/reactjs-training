import React from "react";
import "./CardHeader.css";
import Checkbox from "./Checkbox";
import { MdSave, MdCancel, MdEdit } from "react-icons/md";

const CardHeader = (props) => {
  let actions;
  if (props.modeOnlyView) {
    actions = (
      <div>
        <input
          type="checkbox"
          onChange={props.checkboxChange}
          checked={props.checkboxChecked}
        />
      </div>
    );
  } else {
    if (props.isEdit) {
      actions = (
        <div>
          <MdSave onClick={props.saveHandler} />
          <MdCancel onClick={props.cancelHandler} />
        </div>
      );
    } else {
      actions = (
        <div>
          <MdEdit onClick={props.editHandler} />
          <Checkbox
            checked={props.checkboxChecked}
            onChange={props.checkboxChange}
          />
        </div>
      );
    }
  }
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
      {actions}
    </div>
  );
};

export default CardHeader;
