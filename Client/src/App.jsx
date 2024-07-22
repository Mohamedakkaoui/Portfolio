import React, { useRef, useEffect } from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Contactme from "./Components/Contactme";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Portfolio";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const ProjectsRef = useRef(null);
  const scrollToSection = (section) => {
    let element;
    switch (section) {
      case "home":
        element = homeRef.current;
        break;
      case "about":
        element = aboutRef.current;
        break;
      case "contact":
        element = contactRef.current;
        break;
      case "Projects":
        element = ProjectsRef.current;
      default:
        break;
    }

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Router>
        <NavBar scrollToSection={scrollToSection} />
        <div id="home" ref={homeRef}>
          <Hero />
        </div>
        <div id="about" ref={aboutRef}>
          <AboutMe ScrollTosection={scrollToSection} />
        </div>
        <div id="Projects" ref={ProjectsRef}>
          <Projects />
        </div>
        <div id="contact" ref={contactRef}>
          <Contactme />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
