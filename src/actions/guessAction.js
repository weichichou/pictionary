export const GUESSED = "GUESSED";

function guessed(text) {
  return {
    type: GUEESED,
    payload: text,
  };
}
