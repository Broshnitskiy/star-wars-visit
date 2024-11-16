import { client } from "@/api/apollo";
import { GET_FILMS } from "@/graphql";

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
