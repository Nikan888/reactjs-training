import React from "react";
import "./MainHeader.css";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/actions";

const MainHeader = () => {
  const cards = useSelector((state) => state.cardReducer.cards);
  const { login, isAdmin, isLogged } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  return (
    <header>
      <button className="link-button">
        <Link to="/" className="badge">
          Home
        </Link>
      </button>

      {isAdmin && (
        <button className="link-button">
          <Link to="/settings" className="badge">
            Settings
          </Link>
        </button>
      )}

      {isLogged ? (
        <div className="welcome-block">
          <div>Welcome, {login}</div>
          <button className="badge" onClick={() => dispatch(logOut())}>
            Log out
          </button>
        </div>
      ) : (
        <button className="link-button">
          <Link to="/auth" className="badge">
            Sign in
          </Link>
        </button>
      )}

      <button className="cardsCounter">
        Cards count: <span className="badge">{cards.length}</span>
      </button>
      <h1>Header</h1>
    </header>
  );
};

export default withRouter(MainHeader);
