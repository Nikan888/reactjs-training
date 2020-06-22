import React from "react";
import "./CardHeader.css";
import Checkbox from "../Checkbox";
import { MdSave, MdCancel, MdEdit } from "react-icons/md";

const renderViewOnlyActions = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={props.onCheckboxChange}
        checked={props.checkboxChecked}
      />
    </div>
  );
};

const renderActions = (props) => {
  let actions;
  if (props.isEdit) {
    actions = (
      <div>
        <MdSave onClick={props.onSave} />
        <MdCancel onClick={props.onCancel} />
      </div>
    );
  } else {
    actions = (
      <div>
        <MdEdit onClick={props.onEdit} />
        <Checkbox
          checked={props.checkboxChecked}
          onChange={props.onCheckboxChange}
        />
      </div>
    );
  }
  return actions;
};

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
      {props.modeOnlyView ? renderViewOnlyActions(props) : renderActions(props)}
    </div>
  );
};

export default CardHeader;
