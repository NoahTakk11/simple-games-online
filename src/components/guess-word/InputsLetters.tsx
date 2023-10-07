import { useState, useEffect, useRef } from "react";
import { useRandomWords } from "../../zustand/word-guess";
import Confetti from "react-confetti";
//Componets
import { CustomInputs } from "./CustomInputs";

import "../../styles/index.css";

export default function InputsLetters(): JSX.Element {
  const {
    randomWord,
    tries,
    setTries,
    setMistakes,
    inputIndex,
    setInputIndex,
    setGameState,
    lose,
    setLose,
    win,
    setWin,
  } = useRandomWords();
  const [inputs, setInputs] = useState(Array(randomWord.length).fill(""));
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [viewAlert, setViewAlert] = useState(false);

  const handleInputs = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInput = [...inputs];
    const inputValue = (event.target as HTMLInputElement).value;
    newInput[index] = inputValue;
  };

  const handleInputValidation = (event: KeyboardEvent) => {
    const inputLetter = document.getElementById(
      String(inputIndex)
    ) as HTMLParagraphElement;

    const value = event.key;
    console.log(`la tecla presionada es ${value}`);

    if (
      inputIndex < randomWord.length - 1 &&
      randomWord[inputIndex] === value
    ) {
      setInputIndex(inputIndex + 1);
      inputLetter.textContent = value;
    } else if (
      inputIndex === randomWord.length - 1 &&
      randomWord[inputIndex] === value
    ) {
      console.log("GANASTE");
      inputLetter.textContent = value;
      setWin(true);
      setGameState(false);
    } else {
      setViewAlert(true);

      setTimeout(() => {
        setViewAlert(false);
      }, 1500);

      if (/[a-zA-Z]/.test(value)) {
        setTries();
        setMistakes(value);
      }
    }
  };

  console.log("input index -> ", inputIndex);
  console.log("letter -> ", randomWord[inputIndex]);

  useEffect(() => {
    setGameState(true);
    setLose(false);
    setWin(false);
    if (tries === 0) {
      console.log("PERDISTE");
      setLose(true);
      return () =>
        document.removeEventListener("keydown", handleInputValidation);
    }
    const inputLetter = document.getElementById(
      String(inputIndex)
    ) as HTMLParagraphElement;

    if (inputLetter instanceof HTMLParagraphElement) {
      inputLetter.setAttribute("style", "border-color: #672171");
      inputLetter.textContent = "_";
    }
    setInputs(Array(randomWord.length).fill(""));

    document.addEventListener("keydown", handleInputValidation);

    return () => document.removeEventListener("keydown", handleInputValidation);
  }, [randomWord, inputRef, inputIndex, tries]);

  return (
    <div className="flex items-center justify-center flex-wrap p-2">
      {win ? <Confetti /> : ""}
      <div
        className={`z-10 top-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute ${
          viewAlert ? "block" : "hidden"
        }`}
        role="alert"
      >
        <strong className="font-bold">wrong letter!</strong>
        <span className="block sm:inline">Try another.</span>
      </div>

      <input className="hidden" type="text" autoFocus />
      <div className="flex items-center justify-center flex-wrap p-0">
        {lose ? (
          <div>
            <h1 className="text-6xl text-red-500 font-bold">YOU LOSE</h1>
          </div>
        ) : (
          inputs.map((valor, index) => (
            <CustomInputs
              ref={index === inputIndex ? inputRef : null}
              key={index}
              id={String(index)}
              index={index}
              value={valor}
              callback={(index, event) => {
                handleInputs(index, event);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
