import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState("");
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleActive = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 50) {
        setSticky("sticky");
      } else {
        setSticky("");
      }
    };
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  return (
    <header className={`nav-bar ${sticky}  container`}>
      <div>
        <Link to="/" className="name">
          Portfolio
        </Link>
      </div>
      <nav className={mobileOpen ? "nav-menu open container" : "nav-menu container"}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                handleActive();
                setActive("home");
              }}
              className={active === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => {
                handleActive();
                setActive("skills");
              }}
              className={active === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                handleActive();
                setActive("projects");
              }}
              className={active === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                handleActive();
                setActive("contact");
              }}
              className={active === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-icon">
        <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <Close  className="menuIcon"  style={{ color: "white" }} />
          ) : (
            <Menu className="menuIcon" style={{ color: "white" }} />
          )}
        </IconButton>
      </div>
    </header>
  );
};

export default Navbar;
