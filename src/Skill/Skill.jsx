import React, { useState } from "react";
import "./Skill.css";

const Skill = () => {
  const [selectSkill, setSelectSkill] = useState("Frontend");

  return (
    <div className="skill" id="skill">
      <div>
        <h1>My Skills</h1>
        <p>Your skills are your only permanent job security</p>
      </div>
      <ul className="sections">
        <div>
        <li onClick={() => setSelectSkill("Frontend")}>Frontend</li>
        <li onClick={() => setSelectSkill("Backend")}>Backend</li>
        <li onClick={() => setSelectSkill("Version Control")}>
          Version Control
        </li>
        <li onClick={() => setSelectSkill("Deployment")}>Deployment</li>
        <li onClick={() => setSelectSkill("Collaboration Tools")}>
          Collaboration Tools
        </li>
        </div>
      </ul>
      <section>
        <ul
          className="front-end"
          style={{ display: selectSkill === "Frontend" ? "block" : "none" }}
        >
          <li>
            <span>HTML</span> <progress max="100" value="95"></progress>
          </li>
          <li>
            <span>CSS</span> <progress max="100" value="85"></progress>
          </li>
          <li>
            <span>JavaScript</span> <progress max="100" value="80"></progress>
          </li>
          <li>
            <span>Bootstrap</span> <progress max="100" value="85"></progress>
          </li>
          <li>
            <span>React JS</span> <progress max="100" value="85"></progress>
          </li>
          <li>
            <span>UI</span> <progress max="100" value="65"></progress>
          </li>
          <li>
            <span>Figma</span> <progress max="100" value="70"></progress>
          </li>
        </ul>
        <ul
          className="back-end"
          style={{ display: selectSkill === "Backend" ? "block" : "none" }}
        >
          <li>
            <span>Node JS</span> <progress max="100" value="70"></progress>
          </li>
          <li>
            <span>Express JS</span> <progress max="100" value="75"></progress>
          </li>
          <li>
            <span>Mongo DB</span> <progress max="100" value="70"></progress>
          </li>
        </ul>
        <ul
          className="version-control"
          style={{
            display: selectSkill === "Version Control" ? "block" : "none",
          }}
        >
          <li>
            <span>Github</span> <progress max="100" value="80"></progress>
          </li>
          <li>
            <span>Bitbucket</span> <progress max="100" value="80"></progress>
          </li>
        </ul>
        <ul
          className="deployment"
          style={{ display: selectSkill === "Deployment" ? "block" : "none" }}
        >
          <li>
            <span>Vercel</span> <progress max="100" value="75"></progress>
          </li>
        </ul>
        <ul
          className="collaboration-tools"
          style={{
            display: selectSkill === "Collaboration Tools" ? "block" : "none",
          }}
        >
          <li>
            <span>Slack</span> <progress max="100" value="80"></progress>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skill;
