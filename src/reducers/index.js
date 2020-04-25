import { combineReducers } from "redux";

const initialState = "rainbow";
function questionReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

function guessReducer(state = null, action) {
  switch (action.type) {
    case "GUESSED": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

function hintReducer(state = initialState.split("").map((e) => "_ "), action) {
  switch (action.type) {
    case "HINT": {
      state[action.payload.index] = action.payload.element;
      return state;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  question: questionReducer,
  guess: guessReducer,
  hint: hintReducer,
});
