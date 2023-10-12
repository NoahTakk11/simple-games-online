export default function HomeButton(): JSX.Element {
  return (
    <a
      href="/simple-games-online/"
      className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline absolute top-0 left-0 cursor-pointer mb-5 w-1/2 text-center md:w-32"
    >
      Go to Home
    </a>
  );
}
