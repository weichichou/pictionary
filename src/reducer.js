const initialState = "apple";

export default function pizzaListReducer(state = initialState, action) {
  switch (action.type) {
    case "GUESS_RIGHT": {
      // => Ask yourself: what is action.payload?
      return [
        ...state,
        {
          guessed: action.payload,
        },
      ];
    }
    default: {
      return state;
    }
  }
}
