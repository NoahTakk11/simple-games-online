interface Props {
  check: boolean;
  text: string;
  isActive: boolean;
  id: string;
}

export default function Notification(props: Props): JSX.Element {
  return (
    <div
      id={props.id}
      className={`mx-10 my-5 border-2 border-black rounded-xl md:w-1/4 ${
        props.isActive ? "block" : "hidden"
      }`}
    >
      <header
        className={`relative border-b-2 p-1 h-8 ${
          props.check ? "bg-[#1dd1a1]" : "bg-[#ff6b6b]"
        }`}
      >
        <img
          src={
            props.check
              ? "../../../public/icons/check.svg"
              : "../../../public/icons/uncheck.svg"
          }
          alt=""
          className="absolute top-0 right-0 w-8"
        />
      </header>
      <main className={`text-lg text-left p-1 bg-slate-100`}>{props.text}</main>
    </div>
  );
}
