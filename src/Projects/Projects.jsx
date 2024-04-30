import React, { useState, useEffect } from "react";
import "./Projects.css";
import proj from "./proj";
import { FaGithub } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";

const Projects = () => {
  const [Filter, setFilter] = useState([]);

  useEffect(() => {
    items("frontend");
  }, [proj]);

  function items(v) {
    const filterValue = proj.filter((item) => item.field === v);
    if (filterValue) {
      setFilter(filterValue);
    } else {
      null;
    }
  }

  return (
    <div className="projects" id="projects">
      <section className="proje-head">
        <h1>My Projects</h1>
        <p>Liston - Learn - Win</p>
      </section>
      <ul>
        <li onClick={() => items("frontend")}>Frontend</li>
        <li onClick={() => items("frontend/backend")}>Front-end / Back-end</li>
        <li onClick={() => items("frontend/backend")}>Front & Back</li>
        <li onClick={() => items("internship")}>Internship</li>
      </ul>
      <section className="proje">
        {Filter &&
          Filter.map((list, index) => {
            return (
              <div key={index}>
                <img src={list.image} alt="" />
                <p>{list.title}</p>
                <span>{list.description}</span>
                <div>
                  {list.git && (
                    <a href={list.git}>
                      <FaGithub />
                    </a>
                  )}
                  {list.preview && (
                    <a href={list.preview}>
                      <FaBullseye />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Projects;
