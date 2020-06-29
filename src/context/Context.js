import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

const { Provider, Consumer } = React.createContext();

class CardContextProvider extends Component {
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
    this.setState({
      cards: [...this.state.cards].filter((value) => !this.cardsRecycleBin.includes(value.id)),
    });
  };

  addCardHandler = () => {
    this.setState({
      cards: [
        ...this.state.cards,
        {
          id: uuidv4(),
          headerText: "New Card",
          bodyText: "New Card Body",
        },
      ],
    });
  };

  render() {
    return (
      <Provider
        value={{
          modeOnlyView: this.state.modeOnlyView,
          cards: this.state.cards,
          cardsCount: this.state.cards.length,
          addCardHandler: this.addCardHandler,
          removeCardHandler: this.removeCardHandler,
          cardsRecycleBinHandler: this.cardsRecycleBinHandler,
          OnlyViewCheckBoxHandler: this.OnlyViewCheckBoxHandler,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { CardContextProvider, Consumer as CardContextConsumer };
