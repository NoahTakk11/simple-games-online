interface Props {
  href: string;
  title: string;
  description: string;
}
export default function CardGame(props: Props): JSX.Element {
  return (
    <a
      href={props.href}
      className="md:block w-[90%] h-[90%]  md:max-w-sm p-6 bg-slate-50 border border-gray-950 rounded-lg shadow hover:border-slate-100"
    >
      <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700">{props.description}</p>
    </a>
  );
}
