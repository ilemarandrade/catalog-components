import { Fragment, ReactNode, useEffect, useState } from "react";
import { arrayMoveImmutable } from "array-move";
import { useMoviesProviderState } from "../contexts/MoviesContext";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import MoviePoster from "../components/MoviePoster";
import { IMovie } from "../models/movie";
import SortableList from "../components/SortableList";
import MainLayout from "../layout/MainLayout";
import listComponents from "../constants/listComponents";
import Loading from "../components/Loading";

const ListMoviesSortables = () => {
  const { movies, isLoading } = useMoviesProviderState();
  const [sortMovies, setSortMovies] = useState<IMovie[] | []>([]);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

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
      <Grid spacing={isMobile ? 2 : 4} container component="ul" sx={{ p: 0 }}>
        {children}
      </Grid>
    );
  };

  return (
    <MainLayout title={listComponents.sortableList.title}>
      <Loading open={isLoading} />
      <SortableList onSortEnd={onSortEnd} ContainerToList={ContainerToList}>
        {sortMovies.map((movie) => (
          <Fragment key={movie.id}>
            {movie.poster_path && (
              <Grid
                item
                xs={4}
                sm={4}
                md={3}
                lg={2}
                component="li"
                sx={{ listStyle: "none", cursor: "pointer" }}
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
