import React from "react";
import Card from "../Card/Card";
import "./CardList.css";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCards } from "../../store/actions";

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

const CardList = () => {
  const [onlyViewMode, setOnlyViewMode] = React.useState(false);
  const cards = useSelector((state) => state.cards);
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
        <StyledViewOnlyCheckBox>
          <input
            type="checkbox"
            id="modeOnlyView"
            name="modeOnlyView"
            onChange={() => setOnlyViewMode(!onlyViewMode)}
          />
          <label htmlFor="modeOnlyView">View only</label>
        </StyledViewOnlyCheckBox>
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
              modeOnlyView={onlyViewMode}
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
