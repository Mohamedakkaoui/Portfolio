import React, { useState } from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Contactme from "./Components/Contactme";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Contactme/>
    </>
  );
}

export default App;