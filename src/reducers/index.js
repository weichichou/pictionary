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
      console.log("action.payload.question", action.payload.question);
      console.log("action.payload.text", action.payload.text);
      const word = action.payload.question.split("").map((e) => "_ ");
      let newWord = [...word];
      action.payload.question.split("").forEach((element, index) => {
        if (action.payload.text.includes(element)) {
          newWord[index] = element;
        }
      });
      console.log("word", word);
      console.log("newWord", newWord);
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
