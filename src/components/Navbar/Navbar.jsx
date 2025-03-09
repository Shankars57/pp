import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleActive = () => setMobileOpen(false);

  useEffect(() => {
    // Sticky navbar logic
    const handleSticky = () => {
      setSticky(window.scrollY > 50 ? "sticky" : "");
    };

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  useEffect(() => {
    // Intersection Observer to track sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold for better detection
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className={`nav-bar ${sticky} container`}>
      <div>
        <Link to="/" className="name">Portfolio</Link>
      </div>
      <nav className={mobileOpen ? "nav-menu open container" : "nav-menu container"}>
        <ul>
          {["home", "about", "skills", "resume", "projects", "services", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => {
                  handleActive();
                  setActiveSection(section);
                }}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-icon">
        <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <Close className="menuIcon" style={{ color: "white" }} />
          ) : (
            <Menu className="menuIcon" style={{ color: "white" }} />
          )}
        </IconButton>
      </div>
    </header>
  );
};

export default Navbar;
