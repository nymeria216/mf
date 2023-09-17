import React from "react";

import About from "./components/About";
import BigFive from "./components/BigFive";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <BigFive />
      <Contact />
    </main>
  );
}