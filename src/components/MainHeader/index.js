import React from "react";
import "./MainHeader.css";
import { CardContextConsumer } from "../../context/Context";
import { Link, withRouter } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/auth">Sign in</Link>
      </div>
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

export default withRouter(MainHeader);
