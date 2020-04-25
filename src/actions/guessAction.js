export const GUESSED = "GUESSED";

export function guessed(text) {
  return {
    type: GUESSED,
    payload: text,
  };
}

export const HINT = "HINT";
export function hint(index, element) {
  return {
    type: HINT,
    payload: { index: index, element: element },
  };
}
