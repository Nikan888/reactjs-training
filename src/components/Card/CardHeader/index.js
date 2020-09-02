import React from "react";
import "./CardHeader.css";
import Checkbox from "../Checkbox";
import { MdSave, MdCancel, MdEdit } from "react-icons/md";
import { useSelector } from "react-redux";

const CardHeader = (props) => {
  const isModeOnlyView = useSelector((state) => state.cardReducer.modeOnlyView);
  return (
    <div className="Card-Header">
      {props.isEditMode ? (
        <div>
          <input
            className="card-header-edit"
            maxLength="20"
            type="text"
            value={props.header}
            onChange={props.onChange}
          />
        </div>
      ) : (
        props.header
      )}
      {isModeOnlyView ? (
        <div>
          <input
            type="checkbox"
            onChange={props.onCheckboxChange}
            checked={props.checkboxChecked}
          />
        </div>
      ) : props.isEditMode ? (
        <div>
          <MdSave onClick={props.onSave} />
          <MdCancel onClick={props.onCancel} />
        </div>
      ) : (
        <div>
          <MdEdit onClick={props.onEdit} />
          <Checkbox
            checked={props.checkboxChecked}
            onChange={props.onCheckboxChange}
          />
        </div>
      )}
    </div>
  );
};

export default CardHeader;
