import {
  INITIALIZE_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  REMOVE_CARDS,
  INITIALIZE_USER,
  LOGIN,
  LOGOUT,
  CHANGE_MODE,
} from "./actionsTypes";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const initializeCards = (cards) => ({
  cards,
  type: INITIALIZE_CARDS,
});

export const addCard = (id, headerText, bodyText) => ({
  id,
  headerText,
  bodyText,
  type: ADD_CARD,
});

export const updateCard = (id, headerText, bodyText) => ({
  id,
  headerText,
  bodyText,
  type: UPDATE_CARD,
});

export const removeCards = (cardsRecycleBin) => ({
  cardsRecycleBin,
  type: REMOVE_CARDS,
});

export const initializeUser = () => ({
  type: INITIALIZE_USER,
});

export const logIn = (login, password) => ({
  login,
  password,
  type: LOGIN,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const changeMode = () => ({
  type: CHANGE_MODE,
});

export const loadCards = () => (dispatch) => {
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
};
