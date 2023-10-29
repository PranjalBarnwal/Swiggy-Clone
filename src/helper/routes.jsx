// import React from "react";
// import { HashRouter, Route, Switch } from "react-router-dom";

// import App from "../App";
// import Error from "../components/Error";
// import Body from "../components/Body";
// import Search from "../components/Search";
// import Cart from "../components/Cart";
// import Restaurant from "../components/Restaurant";

// const routes = (
//   <HashRouter>
//     <Switch>
//       <Route path="/" exact component={App} />
//       <Route path="/error" component={Error} />
//       <Route path="/body" component={Body} />
//       <Route path="/search" component={Search} />
//       <Route path="/cart" component={Cart} />
//       <Route path="/restaurant/:resid" component={Restaurant} />
//     </Switch>
//   </HashRouter>
// );

// export default routes;


import Search from "../components/Search";
import Error from "../components/Error";
import Cart from "../components/Cart";
import Body from "../components/Body";
import Restaurant from "../components/Restaurant";
import App from "../App"
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:resid",
          element: <Restaurant/>,
        },
      ],
    },
  ]);

  export default routes;

