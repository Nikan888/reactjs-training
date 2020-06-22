import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import styled from "styled-components";

const StyledViewOnlyCheckBox = styled.div`
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
  &: hover {
    background: #000000;
    font-weight: bold;
    color: white;
  }
`;

class CardList extends Component {
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

  cardsRecycleBin = [];

  OnlyViewCheckBoxHandler = () => {
    this.setState({ modeOnlyView: !this.state.modeOnlyView });
  };

  cardsRecycleBinHandler = (id) => (state) => {
    if (state) {
      this.cardsRecycleBin.push(id);
    } else {
      this.cardsRecycleBin = this.cardsRecycleBin.filter(
        (value) => value !== id
      );
    }
  };

  removeCardHandler = () => {
    let cards = [...this.state.cards];
    this.setState({
      cards: cards.filter((value) => !this.cardsRecycleBin.includes(value.id)),
    });
  };

  render() {
    return (
      <div>
        <div>
          <StyledViewOnlyCheckBox>
            <input
              type="checkbox"
              id="modeOnlyView"
              name="modeOnlyView"
              onChange={this.OnlyViewCheckBoxHandler}
            />
            <label htmlFor="modeOnlyView">View only</label>
          </StyledViewOnlyCheckBox>
          <button className="remove-button" onClick={this.removeCardHandler}>
            Remove card
          </button>
        </div>
        <div className="card-wrapper">
          {this.state.cards.map((card, index) => {
            return (
              <Card
                key={card.id}
                modeOnlyView={this.state.modeOnlyView}
                cardsRecycleBinHandler={this.cardsRecycleBinHandler(card.id)}
                {...card}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
