import ListMovies from "../pages/ListMovies";
import { Redirect, Route } from "react-router-dom";
import MoviesProvider from "../providers/MovieProviders";
import ListMoviesSortables from "../pages/LIstMoviesSortable";
import UploadFile from "../pages/UploadFile";
import ShowComponentToDate from "../pages/ShowComponentToDates";

const Routes = () => (
  <section>
    <MoviesProvider>
      <Route path="/component-to-show-elements-list">
        <ListMovies />
      </Route>
      <Route path="/component-to-modify-elements-list">
        <ListMoviesSortables />
      </Route>
    </MoviesProvider>
    <Route path="/component-to-upload-file">
      <UploadFile />
    </Route>
    <Route path="/component-to-dates">
      <ShowComponentToDate />
    </Route>
    {/* <Redirect path="/" to="/component-to-show-elements-list" /> */}
  </section>
);

export default Routes;
