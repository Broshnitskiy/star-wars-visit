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

export const useFilmByIdQuery = (id: string): UseFilmByIdQueryResult => {
  const { data, loading, error } = useQuery(GET_FILM_BY_ID, {
    variables: { id },
  });

  return { film: data?.film, loading, error };
};
