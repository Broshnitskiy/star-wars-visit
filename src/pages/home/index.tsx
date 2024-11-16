import { FilmList } from "@/components/film-list";
import { IFilmData } from "@/components/film-list/film-list.types";
import { FC } from "react";
import { useLoaderData } from "react-router-dom";

export const Home: FC = () => {
  const films = useLoaderData() as IFilmData[] | [];

  if (!films || films.length === 0) {
    return <p className="text-center text-xl text-gray-600">No data!</p>;
  }

  return <FilmList films={films} />;
};
