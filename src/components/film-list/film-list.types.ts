export interface IFilmData {
  id: string;
  title: string;
  episodeID: number;
  openingCrawl: string;
  director: string;
  producers: string[];
  releaseDate: string;
}

export interface IFilmListProps {
  films: IFilmData[];
}
