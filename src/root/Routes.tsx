import ListMovies from "../pages/ListMovies";
import { Redirect, Route } from "react-router-dom";

const Routes = () => (
  <section>
    <Route path="/component-to-show-elements-list">
      <ListMovies />
    </Route>
    <Redirect path="" to="/component-to-show-elements-list" />
  </section>
);

export default Routes;
