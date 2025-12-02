import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Belajar_responsive from "./Components/Belajar_responsive";
import Portopolio from "./Components/Portopolio";
import Halaman1 from "./Components/Halaman1";
import Component from "./Components/pembelajaran/Navbar2";
import Utama from "./Components/pembelajaran/Utama";
import Page1 from "./Components/Buat_navbar/Page1";

function App() {
  return (
    <Router>
      <div className="font-sans ">
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route path="/responsive" element={<Belajar_responsive />} />
          <Route path="/" element={<Portopolio />} />
          <Route path="/pembelajaran" element={<Utama />} />
          <Route path="/belajar2" element={<Page1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
