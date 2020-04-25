import { combineReducers } from "redux";

const initialState = "strawberry";
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

export default combineReducers({
  question: questionReducer,
  guess: guessReducer,
});
