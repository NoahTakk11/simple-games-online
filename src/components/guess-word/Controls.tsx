import { useRandomWords } from "../../zustand/word-guess";
import { useEffect } from "react";

export default function Controls(): JSX.Element {
  const {
    randomWord,
    setRandomWord,
    shouldUpdateRandomWorld,
    setShouldUpdateRandomWorld,
    setRandomIndex,
    resetMistakes,
    resetTries,
    setInputIndex,
    setGameState,
    setLose,
    setWin,
  } = useRandomWords();
  const style = {
    fontFamily: "Outfit, sans-serif",
  };

  const random = () => {
    setRandomIndex();
    setRandomWord();
    resetTries();
    resetMistakes();
    setInputIndex(0);
    setGameState(true);
    setLose(false);
    setWin(false);

    const letterBox = document.querySelectorAll("input");
    letterBox.forEach((letterBox) => {
      if (letterBox instanceof HTMLInputElement) {
        letterBox.setAttribute(
          "style",
          "m-1 w-10 h-10 border-2 border-[#4A5567] rounded-lg text-2xl text-[#F2F5F9] text-center bg-[#030616] bg-opacity-10"
        );
        letterBox.value = "";
      }
    });
    setShouldUpdateRandomWorld(false);
  };

  const reset = () => {
    resetTries();
    resetMistakes();
    setInputIndex(0);
    setGameState(true);
    setLose(false);
    setWin(false);

    const letterBox = document.querySelectorAll("input");
    letterBox.forEach((letterBox) => {
      if (letterBox instanceof HTMLInputElement) {
        letterBox.setAttribute(
          "style",
          "m-1 w-10 h-10 border-2 border-[#4A5567] rounded-lg text-2xl text-[#F2F5F9] text-center bg-[#030616] bg-opacity-10"
        );
        letterBox.value = "";
      }
    });
    setShouldUpdateRandomWorld(false);
  };

  return (
    <div
      className="flex flex-row items-center justify-center gap-x-12 text-[#F2F5F9] text-[14px]"
      style={style}
    >
      <button
        className="bg-[#C951E7]  border-black shadow-md shadow-black rounded-lg w-[120px] py-2"
        onClick={() => random()}
      >
        Random
      </button>
      <button
        className="bg-[#C951E7]  border-black shadow-md shadow-black rounded-lg w-[120px] py-2"
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
}
