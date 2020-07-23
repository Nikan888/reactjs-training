import React from "react";
import Card from "../Card/Card";
import "./CardList.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCards } from "../../store/actions";

const CardList = () => {
  const cards = useSelector((state) => state.cardReducer.cards);
  const dispatch = useDispatch();

  const cardsRecycleBin = [];

  const cardsRecycleBinHandler = (id) => (state) => {
    const index = cardsRecycleBin.indexOf(id);
    if (index === -1) {
      cardsRecycleBin.push(id);
    } else {
      cardsRecycleBin.splice(cardsRecycleBin.indexOf(id), 1);
    }
  };

  return (
    <div>
      <div>
        <button
          className="remove-button"
          onClick={() => {
            dispatch(removeCards(cardsRecycleBin));
          }}
        >
          Remove selected cards
        </button>
        <button
          className="add-button"
          onClick={() => {
            dispatch(addCard(uuidv4(), "New Card", "New Body"));
          }}
        >
          Add card
        </button>
      </div>

      <div className="card-wrapper">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              cardsRecycleBinHandler={cardsRecycleBinHandler(card.id)}
              headerText={card.headerText}
              bodyText={card.bodyText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
