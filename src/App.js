import React, { useRef } from "react";
import Home from "./Component/Home";
import Experience from "./Component/Experience";
import Testimonial from "./Component/Testimonial";
import "./index.css";
import Technologies from "./Component/Technologies";
import MyProjects from "./Component/MyProjects";
import Contactme from "./Component/Contactme";
import Footer from "./Component/Footer";
function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div id="main">
        <Home scrollToAbout={scrollToAbout} />
      </div>
      <div ref={aboutRef}>
        <Technologies />
      </div>
      <Experience />
      <MyProjects />
      <Testimonial />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
