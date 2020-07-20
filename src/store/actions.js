import {
  INITIALIZE_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  REMOVE_CARDS,
} from "./actionsTypes";

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
