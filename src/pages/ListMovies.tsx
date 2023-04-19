import { Fragment, useEffect, useMemo, useState } from "react";
import MoviePoster from "../components/MoviePoster";
import useGetMovies from "../hooks/api/useGetMovies";
import { Grid } from "@mui/material";
import ShowPaginatedItems from "../components/ShowPaginatedItems";

const ListMovies = () => {
  const [shouldSendRequest, setShouldSendRequest] = useState(false);
  const { getMovies, data, isLoading, totalPages } = useGetMovies();

  const pelis = useMemo(
    () =>
      data?.length
        ? data.map((movie) => {
            return (
              <Fragment key={movie.id}>
                {movie.poster_path && (
                  <Grid item xs={12} sm={4} md={3} lg={2} key={movie.id}>
                    <MoviePoster movie={movie} />
                  </Grid>
                )}
              </Fragment>
            );
          })
        : null,
    [data]
  );

  useEffect(() => {
    setShouldSendRequest(true);
  }, []);

  useEffect(() => {
    if (shouldSendRequest) {
      getMovies();
    }
  }, [getMovies, shouldSendRequest]);

  const handlePages = (page: number) => {
    getMovies(page);
  };

  return (
    <>
      {isLoading && <div>Loading</div>}
      <ShowPaginatedItems count={totalPages} onChange={handlePages}>
        <Grid spacing={4} container>
          {pelis}
        </Grid>
      </ShowPaginatedItems>
    </>
  );
};
export default ListMovies;
