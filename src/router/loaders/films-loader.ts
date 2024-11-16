import { client } from "@/api/apollo";
import { GET_FILMS } from "@/graphql";

/**
 * Fetches the list of films from the API using Apollo Client.
 *
 * This function uses Apollo Client to make a GraphQL query and retrieve a list of films.
 * In case of an error, it logs the error to the console and returns an empty array.
 *
 * @async
 * @function filmsLoader
 * @returns {Promise<any[]>}
 *
 * @throws {Error}
 */

export const filmsLoader = async () => {
  try {
    const { data } = await client.query({
      query: GET_FILMS,
    });

    const films = data.allFilms.films;

    return films;
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
};
