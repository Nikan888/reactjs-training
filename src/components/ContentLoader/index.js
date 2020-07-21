import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { initializeCards } from "../../store/actions";
import { v4 as uuidv4 } from "uuid";

const ContentLoader = (props) => {
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

  return <div>{props.children}</div>;
};

export default ContentLoader;
