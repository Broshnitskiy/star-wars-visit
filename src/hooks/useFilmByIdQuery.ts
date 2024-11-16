import { GET_FILM_BY_ID } from "@/graphql";
import { ApolloError, useQuery } from "@apollo/client";

export interface IFilm {
  title: string;
  episodeID: number;
  openingCrawl: string;
  director: string;
  producers: string[];
  releaseDate: string;
  id: string;
}

interface UseFilmByIdQueryResult {
  film: IFilm;
  loading: boolean;
  error: ApolloError | undefined;
}

/**
 * Custom hook to fetch a film by its ID.
 *
 * This hook fetches data about a specific film using its unique ID.
 *
 * @param {string} id - The unique identifier of the film.
 * @returns {UseFilmByIdQueryResult} An object containing `loading`, `error`, and `film`.
 */

export const useFilmByIdQuery = (id: string): UseFilmByIdQueryResult => {
  const { data, loading, error } = useQuery(GET_FILM_BY_ID, {
    variables: { id },
  });

  return { film: data?.film, loading, error };
};
