//to deal with large FileSystem
//git lfs install
//git lfs track "Assets/*.mp4"

import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import GalleryProject from "./pages/GalleryProject/GalleryProject";
import Footer from "./components/Footer/Footer";
import Resume from "./pages/Resume/Resume";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/:id" element={<GalleryProject />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
    </Router>

  );
}

export default App;
