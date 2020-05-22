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

  renderCardHeader = () => {
    let cardHeader = null;
    let actions;
    if (this.props.modeOnlyView) {
      actions = (
        <div className="actions-position">
          <input
            type="checkbox"
            onChange={this.checkboxChangeHandler}
            checked={this.state.checked}
          />
        </div>
      );
      cardHeader = (
        <div>
          <CardHeader
            text={this.state.cardHeaderText}
            isEdit={this.state.isEdit}
            value={this.state.cardHeaderTextBuff}
            onChange={this.changeCardHeaderHandler}
          />
          {actions}
        </div>
      );
    } else {
      if (this.state.isEdit) {
        actions = (
          <div className="actions-position">
            <MdSave onClick={this.saveHandler} />
            <MdCancel onClick={this.cancelHandler} />
          </div>
        );
        cardHeader = (
          <div>
            <CardHeader
              text={this.state.cardHeaderText}
              isEdit={this.state.isEdit}
              value={this.state.cardHeaderTextBuff}
              onChange={this.changeCardHeaderHandler}
            />
            {actions}
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
        cardHeader = (
          <div>
            <CardHeader
              text={this.state.cardHeaderText}
              isEdit={this.state.isEdit}
              value={this.state.cardHeaderTextBuff}
              onChange={this.changeCardHeaderHandler}
            />
            {actions}
          </div>
        );
      }
    }
    return cardHeader;
  };

  renderCardBody = () => {
    let cardBody = null;

    if (this.props.onlyView) {
      cardBody = (
        <div>
          <CardContent
            text={this.state.cardContentText}
            isEdit={this.state.isEdit}
            value={this.state.cardContentTextBuff}
            onChange={this.changeCardContentHandler}
          />
        </div>
      );
    } else {
      if (this.state.isEdit) {
        cardBody = (
          <div>
            <CardContent
              text={this.state.cardContentText}
              isEdit={this.state.isEdit}
              value={this.state.cardContentTextBuff}
              onChange={this.changeCardContentHandler}
            />
          </div>
        );
      } else {
        cardBody = (
          <div>
            <CardContent
              text={this.state.cardContentText}
              isEdit={this.state.isEdit}
              value={this.state.cardContentTextBuff}
              onChange={this.changeCardContentHandler}
            />
          </div>
        );
      }
    }

    return cardBody;
  };

  render() {
    let cardVariant = this.state.checked ? CHECKED : DEFAULT;

    return (
      <div className={`Card ${cardVariant}`}>
        {this.renderCardHeader()}
        <hr />
        {this.renderCardBody()}
      </div>
    );
  }
}

export default Card;
