import React, { Component } from "react";
import Card from "../Card/Card";
import "./Main.css";

class Main extends Component {
  state = {
    cards: [
      { id: "1", headerText: "Header one", bodyText: "Body one" },
      { id: "2", headerText: "Header two", bodyText: "Body two" },
      { id: "3", headerText: "Header three", bodyText: "Body three" },
      { id: "4", headerText: "Header four", bodyText: "Body four" },
      { id: "5", headerText: "Header five", bodyText: "Body five" },
      { id: "6", headerText: "Header six", bodyText: "Body six" },
      { id: "7", headerText: "Header seven", bodyText: "Body seven" },
      { id: "8", headerText: "Header eight", bodyText: "Body eight" },
      { id: "9", headerText: "Header nine", bodyText: "Body nine" },
      { id: "10", headerText: "Header ten", bodyText: "Body ten" },
    ],
    modeOnlyView: false,
  };

  OnlyViewCheckBoxHandler = () => {
    this.setState({ modeOnlyView: !this.state.modeOnlyView });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            id="modeOnlyView"
            name="modeOnlyView"
            onChange={this.OnlyViewCheckBoxHandler}
          />
          <label htmlFor="modeOnlyView">View only</label>
        </div>
        <div className="card-wrapper">
          {this.state.cards.map((card, index) => {
            return (
              <Card
                key={card.id}
                modeOnlyView={this.state.modeOnlyView}
                {...card}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Main;
