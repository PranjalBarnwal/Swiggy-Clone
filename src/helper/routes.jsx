// import React from "react";
// import { HashRouter, Route, Routes } from "react-router-dom";

// import App from "../App";
// import Error from "../components/Error";
// import Body from "../components/Body";
// import Search from "../components/Search";
// import Cart from "../components/Cart";
// import Restaurant from "../components/Restaurant";

// const routes = (
//   <HashRouter>
//     <Routes>
//       <Route path="/" element={<App />} index />
//       <Route path="error" element={<Error />} />
//       <Route path="body" element={<Body />} />
//       <Route path="search" element={<Search />} />
//       <Route path="cart" element={<Cart />} />
//       <Route path="restaurant/:resid" element={<Restaurant />} />
//     </Routes>
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

