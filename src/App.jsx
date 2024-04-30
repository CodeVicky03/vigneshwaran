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
      <div className="main-slide" style={{display: sidebar ? "block" : "none"}}>
        <ul className="side-bar">
          <p onClick={() => setSidebar((cur) => !cur)}>
            <FaXmark />
          </p>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
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
