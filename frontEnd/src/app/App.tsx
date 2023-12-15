import React from "react";
import { AppRouter } from "../Router/Router";
import "../styles/global.scss";
import { Provider } from "react-redux";
import { store } from "./store";
export const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
};
