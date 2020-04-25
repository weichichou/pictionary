export const GUESSED = "GUESSED";

export function guessed(text) {
  return {
    type: GUESSED,
    payload: text,
  };
}
