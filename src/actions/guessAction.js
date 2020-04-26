export const GUESSED = "GUESSED";

export function guessed(text) {
  return {
    type: GUESSED,
    payload: text,
  };
}

export const HINT = "HINT";
export function triggerHint(text) {
  return {
    type: HINT,
    payload: text,
  };
}
