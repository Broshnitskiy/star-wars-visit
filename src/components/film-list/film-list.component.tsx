import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IFilmListProps } from "./film-list.types";

const tableTitles = ["Title", "Episode ID", "Director", "Release Date"];

export const FilmList: FC<IFilmListProps> = ({ films }) => {
  const navigate = useNavigate();

  return (
    <section className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-2">Start Wars</h1>
      <h2 className="text-2xl font-semibold text-center mb-6">Films List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              {tableTitles.map((t) => (
                <th key={t} className="py-3 px-4 text-left">
                  {t}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {films.map(({ id, title, episodeID, director, releaseDate }) => (
              <tr
                key={id}
                className="border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/film/${id}`)}
              >
                <td className="py-3 px-4">{title}</td>
                <td className="py-3 px-4">{episodeID}</td>
                <td className="py-3 px-4">{director}</td>
                <td className="py-3 px-4">{releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
