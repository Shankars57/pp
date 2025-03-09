import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import "./About.css";
const About = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);
  /*
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.5 } // Adjust based on when you want to trigger (50% visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);*/

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (count <12) {
        setCount((prev) => prev + 1);
      }
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [count, startCounting]);

  return (
    <>
      <div className="about" ref={sectionRef.current}>
        <div className="about-div grid">
          <div className="about_image">
            <img src={assets.about} alt="about" />
          </div>
          <div className="about_me">
            <h1>About Me</h1>
            <p className="p1">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <p className="p2">
              {" "}
              Name: Gowri Shankar Bonam
              <br /> Date of birth: December 17, 2003
              <br /> Address: Peddapuram
              <br /> Zip code: 533437
              <br />
              Email: shenkarb762@gmail.com
              <br /> Phone: +91-9110560147
            </p>
            <p className="p3">
              <span style={{ color: "yellow", fontSize: 30 }}> {count}</span>{" "}
              Projects completed
            </p>

            <div className="btn-div">
              <button>
                <a href="#section1" className="about-btn">
                  Download cv
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
