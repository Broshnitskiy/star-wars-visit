import { gql } from "@apollo/client";

export const GET_FILM_BY_ID = gql`
  query Film($id: ID!) {
    film(id: $id) {
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
      created
      edited
      id
    }
  }
`;
