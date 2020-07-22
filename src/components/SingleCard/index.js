import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../../store/actions";
import "./SingleCard.css";
import { MdSave, MdCancel, MdEdit } from "react-icons/md";

const SingleCard = () => {
  const { id } = useParams();
  const card =
    useSelector((state) =>
      state.cardReducer.cards.find((card) => card.id === id)
    ) || {};
  const [isEditMode, setEditMode] = React.useState(false);
  const dispatch = useDispatch();

  //TODO: remove comments
  /*const isModeOnlyView = localStorage.getItem("modeOnlyView")
    ? JSON.parse(localStorage.getItem("modeOnlyView"))
    : false;*/

  const isModeOnlyView = useSelector((state) => state.cardReducer.modeOnlyView);

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
    if (!isModeOnlyView) {
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
    if (!isModeOnlyView) {
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
    }
    return <div>{body}</div>;
  };

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
