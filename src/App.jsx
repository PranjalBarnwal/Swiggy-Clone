import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./helper/store"
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Provider store={store}>
    <div>
    <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </Provider>
  );
};






export default App;
