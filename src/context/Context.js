import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const { Provider, Consumer } = React.createContext();

class CardContextProvider extends Component {
  state = {
    cards: [],
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
      cards: [...this.state.cards].filter(
        (value) => !this.cardsRecycleBin.includes(value.id)
      ),
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

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((response) => {
        const cards = response.data.slice(0, 15).map((row) => ({
          id: uuidv4(),
          headerText: row.Name,
          bodyText: row.About,
        }));
        this.setState({ cards });
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
