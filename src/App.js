import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Card from "./Card/Card";
import CardContent from "./Card/CardContent";
import CardHeader from "./Card/CardHeader";
import Checkbox from "./Card/Checkbox";
import { DEFAULT, CHECKED } from "./Card/variant";
import { MdSave, MdCancel, MdEdit } from "react-icons/md";

class App extends Component {
  state = {
    checked: false,
    isEdit: false,
    cardHeaderText: "Caption",
    cardContentText: "Text",
    cardHeaderTextBuff: "",
    cardContentTextBuff: "",
  };

  handleCheckboxChange = () => {
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
            type="text"
            value={this.state.cardHeaderTextBuff}
            onChange={this.changeCardHeaderHandler}
          />
        </div>
      );
      content = (
        <div>
          <input
            type="text"
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
            onChange={this.handleCheckboxChange}
          />
        </div>
      );
      header = <CardHeader text={this.state.cardHeaderText} />;
      content = <CardContent text={this.state.cardContentText} />;
    }

    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Card variant={cardVariant}>
            {actions}
            {header}
            {content}
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
