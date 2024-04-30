import React from "react";
import "./Profile.css";
import { RiHome4Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

const Profile = ({setSidebar}) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
      </ul>
      <div className="center-circle">
        <a href="#home">
          <RiHome4Line />
        </a>
      </div>
      <ul>
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
      <p>
        <span onClick={()=> setSidebar((cur)=> !cur)}><IoMenu/></span>
      </p>
    </div>
  );
};

export default Profile;
