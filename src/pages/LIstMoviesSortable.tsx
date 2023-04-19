import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { arrayMoveImmutable } from "array-move";
import { useMoviesProviderState } from "../contexts/MoviesContext";
import { Grid } from "@mui/material";
import MoviePoster from "../components/MoviePoster";
import { IMovie } from "../models/movie";
import SortableList from "../components/SortableList";
import MainLayout from "../layout/MainLayout";

const ListMoviesSortables = () => {
  const { movies } = useMoviesProviderState();
  const [sortMovies, setSortMovies] = useState<IMovie[] | []>([]);

  useEffect(() => {
    setSortMovies(movies);
  }, [movies]);

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    setSortMovies((prevState) =>
      arrayMoveImmutable(prevState, oldIndex, newIndex)
    );
  };

  const ContainerToList = ({ children }: { children: ReactNode }) => {
    return (
      <Grid spacing={4} container component="ul">
        {children}
      </Grid>
    );
  };
  return (
    <MainLayout title="-5 Componente para reordenar listas">
      <SortableList onSortEnd={onSortEnd} ContainerToList={ContainerToList}>
        {sortMovies.map((movie) => (
          <Fragment key={movie.id}>
            {movie.poster_path && (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                lg={2}
                component="li"
                sx={{ listStyle: "none" }}
              >
                <MoviePoster movie={movie} />
              </Grid>
            )}
          </Fragment>
        ))}
      </SortableList>
    </MainLayout>
  );
};

export default ListMoviesSortables;
