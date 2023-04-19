import { Redirect, Route } from "react-router-dom";
import MoviesProvider from "../providers/MovieProviders";
import listComponents from "../constants/listComponents";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const ListMovies = lazy(() => import("../pages/ListMovies"));
const ListMoviesSortables = lazy(() => import("../pages/ListMoviesSortable"));
const UploadFile = lazy(() => import("../pages/UploadFile"));
const ShowComponentToDates = lazy(
  () => import("../pages/ShowComponentToDates")
);
const ShowComponentBarChart = lazy(
  () => import("../pages/ShowComponentBarChart")
);

const Routes = () => (
  <section>
    <Suspense fallback={<Loading open />}>
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
        <ShowComponentToDates />
      </Route>
      <Route path={listComponents.barChart.path}>
        <ShowComponentBarChart />
      </Route>
      <Redirect exact path="/" to={listComponents.showPaginateItems.path} />
    </Suspense>
  </section>
);

export default Routes;
