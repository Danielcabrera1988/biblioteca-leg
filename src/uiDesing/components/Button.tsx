import { Link } from "react-router-dom";

type URL = {
  url: string;
  name: string;
};

export const Button = (data: URL) => {
  return (
    <>
      <Link
        className="py-2 m-4 font-medium text-center text-white rounded-lg shadow-lg w-28 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-cyan-500/50"
        to={data.url}
      >
        {data.name}
      </Link>
    </>
  );
};
