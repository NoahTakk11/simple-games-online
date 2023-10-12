import { useState, useEffect } from "react";
export default function PasswordField(): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const input = document.getElementById("psw") as HTMLInputElement;
    const handleInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      setCount(value.length);
    };

    input.addEventListener("input", handleInput);
    return () => {
      input.removeEventListener("input", handleInput);
    };
  }, []);
  return (
    <div className="flex flex-row w-full items-center justify-center mt-5">
      <input
        type="text"
        name="password-field"
        id="psw"
        className="border-[1px] rounded-r-none border-black rounded-lg h-12 font-semibold text-xl text-center p-2 bg-slate-50 ml-8 w-full md:w-1/4"
      />
      <label className="border-[1px] mr-8 border-black rounded-lg rounded-l-none h-12 font-semibold text-xl p-2  bg-green-300">
        {count}
      </label>
    </div>
  );
}
