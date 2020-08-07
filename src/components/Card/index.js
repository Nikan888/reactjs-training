import React from "react";
import "./Card.css";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import { DEFAULT, CHECKED } from "./variant";
import withLoadingDelay from "../../hoc/withLoadingDelay";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCard } from "../../store/actions";

const Card = (props) => {
  const [checked, setChecked] = React.useState(false);
  const [isEditMode, setEditMode] = React.useState(false);
  const [values, setValues] = React.useState({
    cardHeaderText: props.headerText,
    cardContentText: props.bodyText,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const checkboxChangeHandler = () => {
    setChecked(!checked);
    props.cardsRecycleBinHandler(props.id);
  };

  const editHandler = () => {
    setChecked(false);
    setEditMode(true);
  };

  const changeHandler = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const cancelHandler = () => {
    setValues({
      cardHeaderText: props.headerText,
      cardContentText: props.bodyText,
    });
    setEditMode(false);
  };

  let cardVariant = checked ? CHECKED : DEFAULT;
  return (
    <div
      className={`Card ${cardVariant}`}
      onDoubleClick={() => {
        if (!isEditMode) {
          history.push(`/card/${props.id}`);
        }
      }}
    >
      <CardHeader
        header={values.cardHeaderText}
        isEditMode={isEditMode}
        onChange={changeHandler("cardHeaderText")}
        onCheckboxChange={checkboxChangeHandler}
        checkboxChecked={checked}
        onSave={() => {
          dispatch(
            updateCard(props.id, values.cardHeaderText, values.cardContentText)
          );
          setEditMode(false);
        }}
        onCancel={cancelHandler}
        onEdit={editHandler}
      />
      <hr />
      <CardContent
        text={values.cardContentText}
        isEditMode={isEditMode}
        onChange={changeHandler("cardContentText")}
      />
    </div>
  );
};

Card.propTypes = {
  isEditMode: PropTypes.bool,
  checked: PropTypes.bool,
  changeCardHeaderHandler: PropTypes.func,
  editHandler: PropTypes.func,
  cancelHandler: PropTypes.func,
  saveHandler: PropTypes.func,
  checkboxChangeHandler: PropTypes.func,
  changeCardContentHandler: PropTypes.func,
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  headerTextTemp: PropTypes.string,
  bodyTextTemp: PropTypes.string,
};

export default withLoadingDelay(Card);
