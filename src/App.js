import About from "./components/about/About";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import React, { useEffect } from 'react';
import Footer from "./components/footer/Footer";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);

function App() {

  useEffect(() => {
    document.documentElement.className = "dark-theme";
    ReactGA.pageview(window.location.pathname);
  }, []);


  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
