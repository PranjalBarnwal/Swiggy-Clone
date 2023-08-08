import Search from "../components/Search";
import Error from "../components/Error";
import Cart from "../components/Cart";
import Body from "../components/Body";
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
      ],
    },
  ]);

  export default routes;