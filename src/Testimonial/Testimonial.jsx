import React, { useRef } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import zetway from "../assets/zetway.jpg";
import g from "../assets/g.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import pragadeesh from "../assets/pragadeesh.jpg";

const Testimonial = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    console.log("Next button clicked");
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    console.log("Next button clicked");
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonial</h1>
      <p>Reviews from Those Who've Experienced My Development Work</p>
      <div className="slide">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            740: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="s-one">
              <div>
                <img src={g} alt="" />
                <div>
                  <p>Gokularamana</p>
                  <span>.NET Developer</span>
                </div>
              </div>
              <p style={{ fontSize: "12px" }}>
                He is my friend, and we attended college together. During our
                college years, he had no knowledge of coding. After graduation,
                he completed a MERN stack development course and started working
                on various projects. Now, he handles all his projects with the
                expertise of an experienced developer.
              </p>
              <p style={{ color: "yellow", display: "flex", gap: "5px" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="s-one">
              <div>
                <img src={pragadeesh} alt="" />
                <div>
                  <p>Pragadeesh</p>
                  <span>Computer Science</span>
                </div>
              </div>
              <p style={{ fontSize: "12px" }}>
                Your dedication and hard work are truly inspiring. The way you
                meticulously craft every line of code, sweat over every detail,
                and relentlessly pursue perfection in your frontend projects is
                nothing short of remarkable. Your efforts breathe life into
                digital experiences and elevate them to new heights
              </p>
              <p style={{ color: "yellow", display: "flex", gap: "5px" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="s-one">
              <div>
                <img src={zetway} alt="" />
                <div>
                  <p>Zetway Technology</p>
                  <span>Software Company</span>
                </div>
              </div>
              <p style={{ fontSize: "12px" }}>
                We are confident that Vigneshwaran will excel in his career as a
                React.js developer, making significant contributions to web
                development. His skills and dedication are set to greatly impact
                the industry. We wish Vigneshwaran immense success in all his
                future endeavors and look forward to his achievements.
              </p>
              <p style={{ color: "yellow", display: "flex", gap: "5px" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="buttons">
        <button className="backward" onClick={goPrev}>
          <MdKeyboardArrowLeft />
        </button>
        <button className="forward" onClick={goNext}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
