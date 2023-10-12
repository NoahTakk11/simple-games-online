import { useEffect } from "react";
interface Props {
  index: number;
  id: string;
  value: string;
  callback: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInputs(props: Props) {
  useEffect(() => {
    const currentInput = document.getElementById(props.id);
    if (props.id === "0") {
      currentInput?.focus();
    }
  }, [props.id]);
  return (
    <input
      id={props.id}
      type="text"
      autoFocus
      className={`m-1 w-10 h-10 border-2 border-[#4A5567] rounded-lg text-2xl text-[#F2F5F9] text-center bg-[#030616] bg-opacity-100 ${
        props.id === "0" ? "border-[#672171]" : "border-[#97A3B6]"
      }`}
    />
  );
}
