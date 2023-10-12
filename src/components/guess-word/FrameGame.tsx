import { useEffect, useState } from "react";
import TableRecord from "../../components/guess-word/TableRecord";
import { useRandomWords } from "../../zustand/word-guess";
import InputsLetters from "./InputsLetters";
import Controls from "./Controls";

export default function FrameGame(): JSX.Element {
  const {
    randomWord,
    setRandomWord,
    shouldUpdateRandomWorld,
    setShouldUpdateRandomWorld,
    gameState,
  } = useRandomWords();
  const [disorderWord, setWord] = useState("");

  const style = {
    fontFamily: "Outfit, sans-serif",
  };

  const setDisoderWord = (word: string) => {
    let wordArray = word.split("");

    for (let i = word.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    let disorderWord = wordArray.join("");

    setWord(disorderWord);
  };

  console.log("-> ", randomWord);
  console.log(shouldUpdateRandomWorld);
  useEffect(() => {
    if (shouldUpdateRandomWorld) {
      setRandomWord();
    }
    setDisoderWord(randomWord);
    setShouldUpdateRandomWorld(true);
  }, [randomWord]);

  return (
    <div className="flex flex-col items-center border-[#030616] rounded-xl bg-gradient-to-tl from-[#4A5567] to-[#030616] w-[90%] h-[80%] md:w-[60%] md:h-[50%] lg:w-[40%] lg:h-[80%]">
      <header className="mb-10 mt-10">
        <img src="../../../public/Word Scramblle.svg" alt="" />
      </header>
      <main className="flex flex-col items-center justify-center">
        <div className="bg-[#4A5567] border-black border-2 rounded-md px-2 py-1 shadow-2xl mb-10">
          <h1
            className={`text-4xl text-center text-[#97A3B6] tracking-wider px-20 py-2 ${
              gameState ? "" : "rotate-scale-up-horizontal"
            }`}
            style={style}
          >
            {gameState ? disorderWord.toLowerCase() : randomWord}
          </h1>
        </div>

        <div className="mb-10">
          <TableRecord />
        </div>

        <div className="mb-16">
          <InputsLetters />
        </div>

        <div>
          <Controls />
        </div>
      </main>
      <p className="my-5 underline font-semibold absolute bottom-0 text-slate-50">
        Created By Gonzalo Villavicencio
      </p>
    </div>
  );
}
