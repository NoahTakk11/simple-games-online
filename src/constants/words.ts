import words from "../mocks/words.json";

export const WORDS: string[] = Object.values(words).flatMap((item) => item);
