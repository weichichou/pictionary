import { combineReducers } from "redux";

function questionReducer(state = null, action) {
  switch (action.type) {
    case "SELECTED_QUESTION": {
      return action.payload;
    }
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

// to fix: an array of A~Z, defalut false. If guessed, then true.
function hintReducer(state = null, action) {
  switch (action.type) {
    case "HINT": {
      const word = action.payload.question.split("").map((e) => "_ ");
      let newWord = [...word];
      action.payload.question.split("").forEach((element, index) => {
        if (action.payload.text.includes(element)) {
          newWord[index] = element;
        }
      });

      return newWord;
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
