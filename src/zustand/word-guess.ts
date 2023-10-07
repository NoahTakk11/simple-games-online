import { create } from "zustand";
import { WORDS } from "../constants/words";

interface State {
  randomWord: string;
  randomIndex: number;
  disorderWord: string;
  shouldUpdateRandomWorld: boolean;
  tries: number;
  mistakes: string[];
  inputIndex: number;
  gameState: boolean;
  lose: boolean;
  win: boolnea;
}

interface Actions {
  setRandomWord: () => void;
  setShouldUpdateRandomWorld: (isActive: boolean) => void;
  setRandomIndex: () => void;
  setTries: () => void;
  resetTries: () => void;
  setMistakes: (letter: string) => void;
  resetMistakes: () => void;
  setInputIndex: (index: number) => void;
  setGameState: (bool: boolean) => void;
  setLose: (bool: boolean) => void;
  setWin: (bool: boolean) => void;
}

export const useRandomWords = create<State & Actions>((set) => ({
  randomWord: "",
  randomIndex: Math.floor(Math.random() * WORDS.length),
  disorderWord: "",
  shouldUpdateRandomWorld: true,
  tries: 5,
  mistakes: [],
  inputIndex: 0,
  gameState: true,
  lose: false,
  win: false,

  setRandomWord: () =>
    set((state) => {
      return {
        randomWord: WORDS[state.randomIndex].toLowerCase(),
      };
    }),

  setShouldUpdateRandomWorld: (isActive: boolean) =>
    set(() => ({
      shouldUpdateRandomWorld: isActive,
    })),

  setRandomIndex: () =>
    set(() => ({
      randomIndex: Math.floor(Math.random() * WORDS.length),
    })),

  setTries: () => set((state) => ({ tries: state.tries - 1 })),

  resetTries: () => set((state) => ({ tries: (state.tries = 5) })),

  setMistakes: (letter: string) =>
    set((state) => ({ mistakes: [...state.mistakes, letter] })),

  resetMistakes: () => set(() => ({ mistakes: [] })),

  setInputIndex: (index) => set(() => ({ inputIndex: index })),

  setGameState: (bool: boolean) => set(() => ({ gameState: bool })),

  setLose: (bool: boolean) => set(() => ({ lose: bool })),

  setWin: (bool: boolean) => set(() => ({ win: bool })),
}));
