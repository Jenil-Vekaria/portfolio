import About from "./components/about/About";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import React, { useEffect } from 'react';
import Footer from "./components/footer/Footer";

function App() {

  useEffect(() => {
    document.documentElement.className = "dark-theme";
  }, []);


  return (
    <>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
