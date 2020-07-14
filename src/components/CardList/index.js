import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import styled from "styled-components";
import { CardContextConsumer } from "../../context/Context";

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
  render() {
    return (
      <div>
        <CardContextConsumer>
          {(context) => (
            <div>
              <StyledViewOnlyCheckBox>
                <input
                  type="checkbox"
                  id="modeOnlyView"
                  name="modeOnlyView"
                  onChange={context.OnlyViewCheckBoxHandler}
                />
                <label htmlFor="modeOnlyView">View only</label>
              </StyledViewOnlyCheckBox>
              <button
                className="remove-button"
                onClick={context.removeCardHandler}
              >
                Remove card
              </button>
              <button className="add-button" onClick={context.addCardHandler}>
                Add card
              </button>
            </div>
          )}
        </CardContextConsumer>

        <div className="card-wrapper">
          <CardContextConsumer>
            {(context) =>
              context.cards.map((card) => {
                return (
                  <Card
                    key={card.id}
                    modeOnlyView={context.modeOnlyView}
                    cardsRecycleBinHandler={context.cardsRecycleBinHandler(
                      card.id
                    )}
                    onSave={context.updateCardHandler(card.id)}
                    {...card}
                  />
                );
              })
            }
          </CardContextConsumer>
        </div>
      </div>
    );
  }
}

export default CardList;
