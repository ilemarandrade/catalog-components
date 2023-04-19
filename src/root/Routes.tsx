import ListMovies from "../pages/ListMovies";
import { Redirect, Route } from "react-router-dom";
import MoviesProvider from "../providers/MovieProviders";
import ListMoviesSortables from "../pages/ListMoviesSortable";
import UploadFile from "../pages/UploadFile";
import ShowComponentToDate from "../pages/ShowComponentToDates";
import ShowComponentBarChart from "../pages/ShowComponentBarChart";
import listComponents from "../constants/listComponents";

const Routes = () => (
  <section>
    <MoviesProvider>
      <Route path={listComponents.showPaginateItems.path}>
        <ListMovies />
      </Route>
      <Route path={listComponents.sortableList.path}>
        <ListMoviesSortables />
      </Route>
    </MoviesProvider>
    <Route path={listComponents.uploadFile.path}>
      <UploadFile />
    </Route>
    <Route path={listComponents.datePicker.path}>
      <ShowComponentToDate />
    </Route>
    <Route path={listComponents.barChart.path}>
      <ShowComponentBarChart />
    </Route>
    <Redirect exact path="/" to={listComponents.showPaginateItems.path} />
  </section>
);

export default Routes;
