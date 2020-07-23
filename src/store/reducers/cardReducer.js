import {
  INITIALIZE_CARDS,
  ADD_CARD,
  UPDATE_CARD,
  REMOVE_CARDS,
  CHANGE_MODE,
} from "../actionsTypes";

const initialState = {
  cards: [],
  modeOnlyView: false,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_CARDS: {
      return { ...state, cards: action.cards };
    }
    case ADD_CARD: {
      const { id, headerText, bodyText } = { ...action };
      return {
        ...state,
        cards: [...state.cards, { id, headerText, bodyText }],
      };
    }
    case UPDATE_CARD: {
      const { id, headerText, bodyText } = { ...action };

      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === id) {
            return {
              ...card,
              headerText: headerText,
              bodyText: bodyText,
              id: id,
            };
          }
          return card;
        }),
      };
    }
    case REMOVE_CARDS: {
      return {
        ...state,
        cards: [...state.cards].filter(
          (value) => !action.cardsRecycleBin.includes(value.id)
        ),
      };
    }
    case CHANGE_MODE: {
      return {
        ...state,
        modeOnlyView: !state.modeOnlyView,
      };
    }
    default: {
      return state;
    }
  }
};

export default cardReducer;
