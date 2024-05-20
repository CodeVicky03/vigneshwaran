import Profile from "./profile/Profile";
import Home from "./Home/Home";
import About from "./About/About";
import Skill from "./Skill/Skill";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <div
        className="main-slide"
        style={{ display: sidebar ? "block" : "none" }}
      >
        <ul className="side-bar">
          <p onClick={() => setSidebar((cur) => !cur)}>
            <FaXmark />
          </p>
          <a href="#home">
            <li onClick={() => setSidebar((cur) => !cur)}>Home</li>
          </a>
          <a href="#about">
            <li onClick={() => setSidebar((cur) => !cur)}>About</li>
          </a>
          <a href="#skill">
            <li onClick={() => setSidebar((cur) => !cur)}>Skill</li>
          </a>
          <a href="#experience">
            <li onClick={() => setSidebar((cur) => !cur)}>Experience</li>
          </a>
          <a href="#projects">
            <li onClick={() => setSidebar((cur) => !cur)}>Projects</li>
          </a>
          <a href="#testimonial">
            <li onClick={() => setSidebar((cur) => !cur)}>Testimonial</li>
          </a>
          <a href="#contact">
            <li onClick={() => setSidebar((cur) => !cur)}>Contact</li>
          </a>
        </ul>
      </div>
      <Profile setSidebar={setSidebar} />
      <Home />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
