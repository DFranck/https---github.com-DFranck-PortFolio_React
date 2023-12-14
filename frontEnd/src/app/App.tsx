import React from "react";
import { AppRouter } from "../Router/Router.tsx";
import { Header } from "../components/Header/Header.tsx";
import { Footer } from "../components/Footer/Footer.tsx";
import "../styles/global.scss";
export const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
};
