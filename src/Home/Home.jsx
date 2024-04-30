import React from "react";
import "./Home.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import vicky from "../assets/vicky.jpg";

const Home = () => {
  return (
    <div className="home" id="home">
      <section className="home-left-side">
        <span>Hello</span>
        <h1>
          Iam Vigneshwaran
          <br></br> Front End Developer
        </h1>
        <p>
          I am a front-end developer specializing in React, HTML, CSS, and
          JavaScript. Additionally, I have expertise in MERN stack development,
          which includes Node.js, Express.js, MongoDB, and React.
        </p>
        <a href="#contact">
          <button>
            <span>Hire Me</span>
          </button>
        </a>
        <ul className="home-contact">
          <li>
            <a
              href="https://www.linkedin.com/in/vignesh-waran-03v?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/9965165261"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/CodeVicky03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="tel:+919965165261">
              <IoIosCall />
            </a>
          </li>
        </ul>
      </section>
      <section className="home-right-side">
        <div>
          <img src={vicky} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
