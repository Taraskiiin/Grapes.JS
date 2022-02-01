import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from '../components/Home';
import About from '../components/About';
import Contact from "../components/Contact";
import Editor from "../components/Editor";

const Router: React.FC = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/editor" element={<Editor/>} />
    </Routes>
  </HashRouter>
);

export default Router;