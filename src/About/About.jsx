import React from "react";
import "./About.css";
import { FiLink } from "react-icons/fi";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <p>
        Passionate Front End Developer proficient in HTML, CSS, JavaScript,
        React.js, with extensive experience in creating scalable web
        applications focused on user experience Demonstrates strong
        problem-solving skills and excels as a collaborative team player.
        Dedicated to continuous learning and staying abreast of emerging
        front-end technologies. Eager to contribute technical expertise to
        dynamic projects.
      </p>
      <a href="vigneshwaran.pdf" download="vigneshwaran">
        Download CV
      </a>
      <div>
        <p>
          I really love frontend development because it feels like drawing with
          code—like creating art on the web. This is why I'm passionate about
          frontend development; it allows me to bring creative visions to life
          and build interactive experiences that users can enjoy.
        </p>
        <FiLink />
        <p>
          Web development is my chosen career path after transitioning from the
          field of aeronautical science. I shifted my focus to this dynamic
          and creative industry to explore new technological frontiers and
          leverage my problem-solving skills in a rapidly evolving digital
          landscape.
        </p>
      </div>
    </div>
  );
};

export default About;
