import { ReactNode, useEffect, useState } from "react";
import MoviesContext from "../contexts/MoviesContext";
import useGetMovies from "../hooks/api/useGetMovies";

interface IMovieProvider {
  children: ReactNode;
}

const MoviesProvider = ({ children }: IMovieProvider) => {
  const [shouldSendRequest, setShouldSendRequest] = useState(false);
  const { getMovies, data, isLoading, totalPages } = useGetMovies();

  useEffect(() => {
    setShouldSendRequest(true);
  }, []);

  useEffect(() => {
    if (shouldSendRequest) {
      getMovies();
    }
  }, [getMovies, shouldSendRequest]);

  return (
    <MoviesContext.Provider
      value={{ movies: data, totalPages, isLoading, getMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
