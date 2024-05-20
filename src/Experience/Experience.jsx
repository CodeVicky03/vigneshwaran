import React from "react";
import "./Experience.css";
import zetway from "../assets/zetway.jpg";
import { MdOutlineAdsClick } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <section className="ex-head">
        <div className="image">
          <img src={zetway} alt="" />
        </div>
        <p>
          <a href="https://www.zetway.in/" target="_blank">
            zetway technology <MdOutlineAdsClick />
          </a>
        </p>
        <p className="intern">Internship</p>
      </section>
      <section className="ex">
        <p>
          <span style={{ color: "#fd853a" }}>MINE</span> :<br></br> After
          completing rigorous MERN Stack Developer training, I earned an
          internship at Zetway Technology. This opportunity recognized my
          potential and skills honed during training. I am committed to using my
          technical expertise and collaborative spirit to deliver quality work
          and contribute effectively to my team at Zetway Technology.
        </p>
        <div className="view-certificate">
          <a
            href="Internshipofferletter.pdf"
            download="Internship-offer-letter.pdf"
          >
            <p>Offer Letter</p>
          </a>
          <span>
            <IoIosLink />
          </span>
          <a
            href="InternshipCertificate.pdf"
            download="Internship-Certificate.pdf"
          >
            <p>Completion Certificates</p>
          </a>
        </div>
        <p>
          <span style={{ color: "#fd853a" }}>ZETWAY</span> :<br></br>
          Vigneshwaran showcased a strong understanding of React.js concepts,
          including state management, component lifecycle, and virtual DOM
          manipulation.He actively participated on development of an internal
          billing software tool utilized by our company. Additionally, he
          significantly contributed to reworking our company portfolio.
        </p>
      </section>
    </div>
  );
};

export default Experience;
