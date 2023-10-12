import Search from "../components/Search";
import Error from "../components/Error";
import Cart from "../components/Cart";
import Body from "../components/Body";
import Restaurant from "../components/Restaurant";
import App from "../App"
import { createBrowserRouter } from "react-router-dom";

import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Search from "../components/Search";
import Error from "../components/Error";
import Cart from "../components/Cart";
import Body from "../components/Body";
import Restaurant from "../components/Restaurant";
import App from "../App";

const routes = (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/app" />
      </Route>
      <Route path="/app">
        <App />
        <Switch>
          <Route path="/app" exact component={Body} />
          <Route path="/app/search" component={Search} />
          <Route path="/app/cart" component={Cart} />
          <Route path="/app/restaurant/:resid" component={Restaurant} />
        </Switch>
      </Route>
      <Route path="/error" component={Error} />
    </Switch>
  </Router>
);

export default routes;
