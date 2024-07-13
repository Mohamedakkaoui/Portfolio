import React, { useState } from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Contactme from "./Components/Contactme";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Contactme/>
      <Footer/>
    </>
  );
}

export default App;