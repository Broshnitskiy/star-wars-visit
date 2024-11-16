import { FC } from "react";
import { IFilmCardProps } from "./film-card.types";

export const FilmCard: FC<IFilmCardProps> = ({ film }) => {
  const { director, releaseDate, producers, openingCrawl } = film;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Film Details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Details</h2>
            <ul className="space-y-4 mt-4">
              <li>
                <strong className="text-gray-700">Director:</strong> {director}
              </li>
              <li>
                <strong className="text-gray-700">Release Date:</strong>{" "}
                {new Date(releaseDate).toLocaleDateString()}
              </li>
              <li>
                <strong className="text-gray-700">Producers:</strong>{" "}
                {producers.join(", ")}
              </li>
            </ul>
          </div>

          {/* Right Column - Opening Crawl */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Opening Crawl
            </h2>
            <p className="mt-4 text-gray-600">{openingCrawl}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
