import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <section>
        <h1>vigneshwaran</h1>
        <p>
          I am a front-end developer specializing in React, HTML, CSS, and
          JavaScript. Additionally, I have expertise in MERN stack development,
          which includes Node.js, Express.js, MongoDB, and React.
        </p>
      </section>
      <p className="copy-rights">
        &copy; 2024 by vigneshwaran. All rights reserved.
      </p>
      <section className="LINKS">
        <ul className="links-link">
          <li>Links</li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="Links-contact">
          <li>Contact</li>
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
    </div>
  );
};

export default Footer;
