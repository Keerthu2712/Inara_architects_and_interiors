import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWorks from "./pages/OurWorks";
import Services from "./pages/Services";

import Team from "./pages/Teams";
import Contact from "./pages/Contact";
import FestivalPopup from "./components/FestivalPopup";


function App() {
  return (
    <>
      <FestivalPopup />
      <Header />
    

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ourworks" element={<OurWorks />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other pages here */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
