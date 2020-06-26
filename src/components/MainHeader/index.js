import React from "react";
import "./MainHeader.css";
import { CardContextConsumer } from "../../context/Context";

const MainHeader = () => {
  return (
    <header>
      <CardContextConsumer>
        {(context) => (
          <button type="button" className="cardsCounter">
            Cards count: <span className="badge">{context.cardsCount}</span>
          </button>
        )}
      </CardContextConsumer>
      <h1>Header</h1>
    </header>
  );
};

export default MainHeader;
