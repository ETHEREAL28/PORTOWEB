import React from "react"
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
import Projects from "./component/Projects";
import Footer from "./component/Footer";
import Certificates from "./component/Certificates";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Certificates />
      <Footer />
    </>
  )
}

export default App;
