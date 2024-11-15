import { gql } from "@apollo/client";

export const GET_FILMS = gql`
  query AllFilms {
    allFilms {
      films {
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
  }
`;
