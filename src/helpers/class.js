import GREEK_ALPHABET from "../constants/greek-alphabet.json";

const getClass = (classNum) => {
  if (classNum === 0) return "founding";

  if (classNum >= GREEK_ALPHABET.length) {
    const first = Math.floor((classNum - 1) / GREEK_ALPHABET.length);
    const second = (classNum - 1) % GREEK_ALPHABET.length;
    return `${GREEK_ALPHABET[first]} ${GREEK_ALPHABET[second]}`;
  }

  return GREEK_ALPHABET[classNum - 1];
};

export { getClass };
