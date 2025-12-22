import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CategoryProjects from "./pages/CategoryProjects";
import ProjectGallery from "./pages/ProjectGallery";
import Services from "./pages/Services";

import Team from "./pages/Teams";
import Contact from "./pages/Contact";
import FestivalPopup from "./components/FestivalPopup";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";


function App() {
  return (
    <>
      <FestivalPopup />
      <ScrollToTop />
      <WhatsAppButton />

      <Header />
    

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:category" element={<CategoryProjects />} />
          <Route
            path="/portfolio/:category/:projectId"
            element={<ProjectGallery />}
          />
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
