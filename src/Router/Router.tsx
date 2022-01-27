import React from "react";
import { Route, HashRouter, Navigate, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from '../components/Home';
import About from '../components/About';
import Contact from "../components/Contact";

export const pagesNamings = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

const Router: React.FC = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </HashRouter>
);

export default Router;