/**
 * Represents data about a single film.
 *
 * @property {string} id
 * @property {string} title
 * @property {number} episodeID
 * @property {string} openingCrawl
 * @property {string} director
 * @property {string[]} producers
 * @property {string} releaseDate
 */

export interface IFilmData {
  id: string;
  title: string;
  episodeID: number;
  openingCrawl: string;
  director: string;
  producers: string[];
  releaseDate: string;
}

/**
 * Defines the props for the FilmList component.
 *
 * @property {IFilmData[]} films - An array of film objects to be displayed in the list.
 */

export interface IFilmListProps {
  films: IFilmData[];
}
