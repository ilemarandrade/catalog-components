import { createContext, useContext } from "react";
import { IMovie } from "../models/movie";

interface IMovieProviders {
  movies: IMovie[] | [];
  totalPages: number;
  isLoading: boolean;
  getMovies: (page: number) => void;
}

const MoviesContext = createContext<IMovieProviders>({
  movies: [],
  totalPages: 0,
  isLoading: false,
  getMovies: () => {},
});

export const useMoviesProviderState = () => {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("MovieProviders must be used within a GameControlProvider");
  }

  return context;
};

export default MoviesContext;
