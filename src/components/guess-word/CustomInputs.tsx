interface Props {
  index: number;
  id: string;
  value: string;
  // isActive: boolean;
  callback: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInputs(props: Props) {
  return (
    // <input
    //   id={props.id}
    //   ref={ref}
    //   type="text"
    //   value={props.value}
    //   disabled={!props.isActive}
    //   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    //     props.callback(props.index, e);
    //   }}
    //   className="m-1 w-10 h-10 border-2 border-[#4A5567] rounded-lg text-2xl text-[#F2F5F9] text-center bg-[#030616] bg-opacity-10"
    // />

    <input
      id={props.id}
      type="text"
      className={`m-1 w-10 h-10 border-2 border-[#4A5567] rounded-lg text-2xl text-[#F2F5F9] text-center bg-[#030616] bg-opacity-100 ${
        props.id === "0" ? "border-[#672171]" : "border-[#97A3B6]"
      }`}
    />
  );
}
