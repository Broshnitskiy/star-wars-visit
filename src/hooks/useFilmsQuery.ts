import { GET_FILMS } from "@/graphql";
import { ApolloError, useQuery } from "@apollo/client";

interface UseFilmsResult {
  films: unknown;
  loading: boolean;
  error: ApolloError | undefined;
}

export const useFilmsQuery = (): UseFilmsResult => {
  const { data, loading, error } = useQuery(GET_FILMS);

  return { films: data, loading, error };
};
