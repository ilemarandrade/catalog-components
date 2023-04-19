import { Fragment, useMemo } from "react";
import MoviePoster from "../components/MoviePoster";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ShowPaginatedItems from "../components/ShowPaginatedItems";
import MainLayout from "../layout/MainLayout";
import { useMoviesProviderState } from "../contexts/MoviesContext";
import listComponents from "../constants/listComponents";
import Loading from "../components/Loading";

const ListMovies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { movies, totalPages, getMovies, isLoading } = useMoviesProviderState();

  const pelis = useMemo(
    () =>
      movies?.length
        ? movies.map((movie) => {
            return (
              <Fragment key={movie.id}>
                {movie.poster_path && (
                  <Grid item xs={4} sm={4} md={3} lg={2} key={movie.id}>
                    <MoviePoster movie={movie} />
                  </Grid>
                )}
              </Fragment>
            );
          })
        : null,
    [movies]
  );

  const handlePages = (page: number) => {
    getMovies(page);
  };

  return (
    <MainLayout title={listComponents.showPaginateItems.title}>
      <Loading open={isLoading} />
      <ShowPaginatedItems count={totalPages} onChange={handlePages}>
        <Grid spacing={isMobile ? 2 : 4} container>
          {pelis}
        </Grid>
      </ShowPaginatedItems>
    </MainLayout>
  );
};
export default ListMovies;
