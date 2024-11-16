import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IFilmListProps } from "./film-list.types";

const tableTitles = ["Title", "Episode ID", "Director", "Release Date"];

/**
 * Component FilmList
 *
 * @param {IFilmListProps} props
 * @returns {JSX.Element}
 *
 * @example
 * const films = [
 *   { id: "1", title: "A New Hope", episodeID: 4, director: "George Lucas", releaseDate: "1977-05-25" },
 *   { id: "2", title: "The Empire Strikes Back", episodeID: 5, director: "Irvin Kershner", releaseDate: "1980-05-21" }
 * ];
 *
 * <FilmList films={films} />
 *
 * @category Components
 * @author Roman Bro
 */

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
