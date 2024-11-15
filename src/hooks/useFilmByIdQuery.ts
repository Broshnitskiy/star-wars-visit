import { GET_FILM_BY_ID } from "@/graphql";
import { ApolloError, useQuery } from "@apollo/client";

interface UseFilmByIdQueryResult {
  film: unknown;
  loading: boolean;
  error: ApolloError | undefined;
}

export const useFilmByIdQuery = (id: string): UseFilmByIdQueryResult => {
  const { data, loading, error } = useQuery(GET_FILM_BY_ID, {
    variables: { id },
  });

  return { film: data?.film, loading, error };
};
