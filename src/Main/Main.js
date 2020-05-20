import React, { Component } from "react";
import Card from "../Card/Card";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <div className="card-wrapper">
        <Card headerText="Card header" bodyText="Card body" />
      </div>
    );
  }
}

export default Main;
