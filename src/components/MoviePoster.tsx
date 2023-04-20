import { IMovie } from "../models/movie";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const ROOT_IMAGE = "https://image.tmdb.org/t/p/w220_and_h330_face/";

interface IMoviePoster {
  movie: IMovie;
}

const ContainerMovie = styled("div")``;

const Poster = styled("img")`
  width: 100%;
  border-radius: 6px;
`;

const MoviePoster = ({ movie }: IMoviePoster) => {
  return (
    <ContainerMovie>
      <Typography
        align="center"
        variant="h6"
        className="nameMovie"
        title={movie.title}
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: { xs: "none", md: "block" },
        }}
      >
        {movie.title}
      </Typography>
      <Poster alt={movie.title} src={`${ROOT_IMAGE}${movie.poster_path}`} />
      <Typography align="center" sx={{ display: { xs: "none", md: "block" } }}>
        ({movie.release_date})
      </Typography>
    </ContainerMovie>
  );
};

export default MoviePoster;
