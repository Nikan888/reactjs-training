import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../../store/actions";
import TextInput from "../TextInput";
import "./SingleCard.css";
import { MdSave, MdCancel, MdEdit } from "react-icons/md";

const SingleCard = () => {
  const { id } = useParams();
  console.log("id");
  console.log(id);
  const card =
    useSelector((state) => state.cards.find((card) => card.id === id)) || {};
  console.log("card");
  console.log(card);
  const [isEditMode, setEditMode] = React.useState(false);
  const [isDisabled, setDisabled] = React.useState(false);
  const dispatch = useDispatch();

  const [values, setValues] = React.useState({
    headerText: card.headerText,
    bodyText: card.bodyText,
  });

  const changeHandler = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const cancelHandler = () => {
    setValues({
      headerText: card.headerText,
      bodyText: card.bodyText,
    });
    setEditMode(false);
  };

  const editHandler = () => {
    setEditMode(true);
  };

  const renderHeader = (headerText) => {
    let header, actions;
    if (isEditMode) {
      header = (
        <input
          className="single-card-header-edit"
          type="text"
          value={headerText}
          onChange={changeHandler("headerText")}
        />
      );
      actions = (
        <div>
          <MdSave
            onClick={() => {
              dispatch(updateCard(id, values.headerText, values.bodyText));
              setEditMode(false);
            }}
          />
          <MdCancel onClick={cancelHandler} />
        </div>
      );
    } else {
      header = <div>{headerText}</div>;
      actions = <MdEdit onClick={editHandler} />;
    }
    return (
      <div>
        {header}
        {actions}
      </div>
    );
  };

  const renderBody = (bodyText) => {
    let body;
    if (isEditMode) {
      body = (
        <textarea
          className="card-body-edit"
          value={bodyText}
          onChange={changeHandler("bodyText")}
        />
      );
    } else {
      body = <div>{bodyText}</div>;
    }
    return <div>{body}</div>;
  };

  console.log("isEditMode");
  console.log(isEditMode);

  return (
    <div className="single-card">
      <div className="single-card-header">
        {renderHeader(values.headerText)}
      </div>
      <hr />
      <div className="single-card-body">{renderBody(values.bodyText)}</div>
    </div>
  );
};

export default SingleCard;
