import React, { useRef, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Resume from "../../components/Resume/Resume";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/services/Services";
import { assets } from "../../assets/assets";
import { linearGradient } from "motion/react-client";
const Home = () => {
  const sections = useRef([]);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="sections">
      <section
        ref={(el) => (sections.current[0] = el)}
        className="home"
        id="section1"
        style={{background:`linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.3),rgba(0,0,0,0.04)),url(${assets.bg})`}}
      >
        <Header />
      </section>
      <section
        ref={(el) => (sections.current[1] = el)} // ✅ Unique index
        className="about_sec"
        id="about"
      >
        <About />
      </section>
      <section
        ref={(el) => (sections.current[2] = el)} // ✅ Unique index
        className="skills"
        id="skills"
      >
        <Skills />
      </section>
      <section
        ref={(el) => (sections.current[3] = el)} // ✅ Unique index
        className="resume"
        id="resume"
      >
      <Resume/>
       
      </section>
      <section
        ref={(el) => (sections.current[4] = el)} // ✅ Unique index
        className="projects"
        id="projects"
      >
      <Projects/>
      </section>
      <section
        ref={(el) => (sections.current[5] = el)} // ✅ Unique index
        className="services"
        id="services"
       
      >
        <Services/>
      </section>
      <section
        ref={(el) => (sections.current[6] = el)} // ✅ Unique index
        className="contact"
        id="contact"
        style={{ height: "100vh" }}
      ></section>
      
    </div>
  );
};

export default Home;
