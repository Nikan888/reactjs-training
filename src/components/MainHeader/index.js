import React from "react";
import "./MainHeader.css";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadCards } from "../../store/actions";

const MainHeader = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCards());
  }, []);

  return (
    <header>
      <button className="link-button">
        <Link to="/" className="badge">
          Home
        </Link>
      </button>
      <button className="link-button">
        <Link to="/auth" className="badge">
          Sign in
        </Link>
      </button>
      <button className="cardsCounter">
        Cards count: <span className="badge">{cards.length}</span>
      </button>
      <h1>Header</h1>
    </header>
  );
};

export default withRouter(MainHeader);
