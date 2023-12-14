import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home/Home.tsx";
import { About } from "../views/About/About.tsx";
import { Header } from "../common/components/Header/Header.tsx";
import { Footer } from "../common/components/Footer/Footer.tsx";
import { Contact } from "../views/Contact/Contact.tsx";
import { Project } from "../views/Projects/Projects.tsx";
export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
};
