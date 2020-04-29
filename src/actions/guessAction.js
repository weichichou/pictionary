export const GUESSED = "GUESSED";

export function guessed(text) {
  return {
    type: GUESSED,
    payload: text,
  };
}

export const HINT = "HINT";
export function triggerHint(text, question) {
  return {
    type: HINT,
    payload: { text, question },
  };
}

export const SELECTED_QUESTION = "SELECTED_QUESTION";

export function selectedQuestion(text) {
  return {
    type: SELECTED_QUESTION,
    payload: text,
  };
}
