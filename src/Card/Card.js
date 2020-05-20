import React, { Component } from "react";
import "./Card.css";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import Checkbox from "./Checkbox";
import { DEFAULT, CHECKED } from "./variant";
import { MdSave, MdCancel, MdEdit } from "react-icons/md";

class Card extends Component {
  state = {
    checked: false,
    isEdit: false,
    cardHeaderText: this.props.headerText,
    cardContentText: this.props.bodyText,
    cardHeaderTextBuff: "",
    cardContentTextBuff: "",
  };

  checkboxChangeHandler = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  editHandler = () => {
    this.setState({
      checked: false,
      isEdit: !this.state.isEdit,
      cardHeaderTextBuff: this.state.cardHeaderText,
      cardContentTextBuff: this.state.cardContentText,
    });
  };

  changeCardHeaderHandler = (event) => {
    this.setState({ cardHeaderTextBuff: event.target.value });
  };

  changeCardContentHandler = (event) => {
    this.setState({ cardContentTextBuff: event.target.value });
  };

  saveHandler = () => {
    this.setState({
      cardHeaderText: this.state.cardHeaderTextBuff,
      cardContentText: this.state.cardContentTextBuff,
      isEdit: !this.state.isEdit,
    });
  };

  cancelHandler = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  render() {
    console.log("Card log");
    console.log(this.state);
    console.log(this.props);
    let actions;
    let header;
    let content;
    let cardVariant = this.state.checked ? CHECKED : DEFAULT;

    if (this.state.isEdit) {
      actions = (
        <div className="actions-position">
          <MdSave onClick={this.saveHandler} />
          <MdCancel onClick={this.cancelHandler} />
        </div>
      );
      header = (
        <div>
          <input
            className="card-header-edit"
            maxLength="20"
            type="text"
            value={this.state.cardHeaderTextBuff}
            onChange={this.changeCardHeaderHandler}
          />
        </div>
      );
      content = (
        <div>
          <textarea
            className="card-body-edit"
            value={this.state.cardContentTextBuff}
            onChange={this.changeCardContentHandler}
          />
        </div>
      );
    } else {
      actions = (
        <div className="actions-position">
          <MdEdit onClick={this.editHandler} />
          <Checkbox
            checked={this.state.checked}
            onChange={this.checkboxChangeHandler}
          />
        </div>
      );
      header = <CardHeader text={this.state.cardHeaderText} />;
      content = <CardContent text={this.state.cardContentText} />;
    }

    return (
      <div className={`Card ${cardVariant}`}>
        {header}
        {actions}
        <hr />
        {content}
      </div>
    );
  }
}

export default Card;
