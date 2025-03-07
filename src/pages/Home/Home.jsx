import React, { useRef, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  const sections = useRef([]);
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
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
    <div>
      <section ref={(el) => (sections.current[0] = el)} className="home">
      <h1 className="headings">Introduction</h1>
        <Header />
      </section>
      <section
        ref={(el) => (sections.current[1] = el)}
        className="skills"
        id="skills"
        style={{height:'100vh'}}
      ></section>
      <section
        ref={(el) => (sections.current[2] = el)}
        className="projects"
        id="projects"
        style={{height:'100vh'}}
      ></section>
      <section
        ref={(el) => (sections.current[3] = el)}
        className="contact"
        id="contacts"
        style={{height:'100vh'}}
      ></section>
    </div>
  );
};

export default Home;
