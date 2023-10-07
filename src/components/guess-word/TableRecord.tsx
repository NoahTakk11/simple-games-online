import { useRandomWords } from "../../zustand/word-guess";

export default function TableRecord(): JSX.Element {
  const { tries, mistakes } = useRandomWords();

  const style = {
    fontFamily: "Outfit, sans-serif",
  };

  return (
    <div className="grid grid-cols-2 gap-20 ">
      <h3 className="text-md text-[#97A3B6]">Tries({tries}/5)</h3>
      <h3 className="text-sm font-medium text-[#97A3B6]" style={style}>
        Mistakes: {mistakes.join(",")}
      </h3>
    </div>
  );
}
