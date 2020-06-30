import React, { Component } from "react";
import "./Card.css";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import { DEFAULT, CHECKED } from "./variant";
import withLoadingDelay from "../../hoc/withLoadingDelay";
import PropTypes from "prop-types";

class Card extends Component {
  state = {
    checked: false,
    isEdit: false,
    cardHeaderText: this.props.headerText,
    cardContentText: this.props.bodyText,
    cardHeaderTextBuff: this.props.headerText,
    cardContentTextBuff: this.props.bodyText,
  };

  checkboxChangeHandler = () => {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.cardsRecycleBinHandler(this.props.id, !this.state.checked);
  };

  editHandler = () => {
    this.setState({
      checked: false,
      isEdit: true,
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
      isEdit: false,
      checked: false,
    });
  };

  cancelHandler = () => {
    this.setState({
      cardHeaderTextBuff: this.state.cardHeaderText,
      cardContentTextBuff: this.state.cardContentText,
      isEdit: false,
      checked: false,
    });
  };

  render() {
    let cardVariant = this.state.checked ? CHECKED : DEFAULT;

    return (
      <div className={`Card ${cardVariant}`}>
        <CardHeader
          text={this.state.cardHeaderText}
          isEdit={this.state.isEdit}
          value={this.state.cardHeaderTextBuff}
          onChange={this.changeCardHeaderHandler}
          modeOnlyView={this.props.modeOnlyView}
          onCheckboxChange={this.checkboxChangeHandler}
          checkboxChecked={this.state.checked}
          onSave={this.saveHandler}
          onCancel={this.cancelHandler}
          onEdit={this.editHandler}
        />
        <hr />
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

Card.propTypes = {
  modeOnlyView: PropTypes.bool,
  isEdit: PropTypes.bool,
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
