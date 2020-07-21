import React from "react";
import "./MainHeader.css";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { initializeCards } from "../../store/actions";
import { v4 as uuidv4 } from "uuid";

const MainHeader = () => {
  const cards = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
      )
      .then((response) => {
        dispatch(
          initializeCards(
            response.data.splice(0, 15).map((row) => ({
              id: uuidv4(),
              headerText: row.Name,
              bodyText: row.About,
            }))
          )
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <header>
      <button className="link-button">
        <Link to="/" className="badge">Home</Link>
      </button>
      <button className="link-button">
        <Link to="/auth" className="badge">Sign in</Link>
      </button>
      <button className="cardsCounter">
        Cards count: <span className="badge">{cards.length}</span>
      </button>
      <h1>Header</h1>
    </header>
  );
};

export default withRouter(MainHeader);
