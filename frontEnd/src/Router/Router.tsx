import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home/Home";
import { About } from "../views/About/About";
import { Header } from "../common/components/Header/Header";
import { Footer } from "../common/components/Footer/Footer";
import { Project } from "../views/Projects/Projects";
export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
};
