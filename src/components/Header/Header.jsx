import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { LinkedIn, GitHub } from "@mui/icons-material"; // LinkedIn Icon
import CodeIcon from "@mui/icons-material/Code"; // Generic Code Icon for CodeChef
import TerminalIcon from "@mui/icons-material/Terminal"; // Generic for LeetCode
import AssessmentIcon from "@mui/icons-material/Assessment"; // Generic for HackerRank
import { IconButton } from "@mui/material";
const Header = () => {
  return (
    <div className="hero">
      <div className="grid">
        <div className="intro">
          <h4>Hello, It's Me</h4>
          <h1>B.CH.D.G SHANKAR</h1>
          <h4>
            And I'm A <span>Frontend Developer</span>
          </h4>
          <p>
            I'm a BTech 3rd-year student specializing in Artificial Intelligence
            and Machine Learning (AI&ML). Passionate about building interactive
            and responsive web applications, I constantly explore new
            technologies to enhance my development skills.
          </p>
          <div className="links">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/ch-d-g-shankar-bonam-002bb2321"
              target="_blank"
              className="icons"
              sx={{ border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",}}
            >
              <LinkedIn
                sx={{
                  fontSize: 40,
                  color: "#0077B5"
                 
                }}
              />
            </IconButton>

            <IconButton
              component="a"
              className="icons"
              href="https://leetcode.com/u/shenkarb762/"
              target="_blank"
              sx={{ border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",}}
            >
              <TerminalIcon
                sx={{
                  fontSize: 40,
                
                 
                }}
              />
            </IconButton>

            <IconButton
              component="a"
              className="icons"
              href="https://www.codechef.com/users/shankar_s58"
              target="_blank"
              sx={{ border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",}}
            >
              <CodeIcon
                sx={{
                  fontSize: 40,
                 
                }}
              />
            </IconButton>

            <IconButton
              component="a"
              className="icons"
              href="https://www.hackerrank.com/profile/shankarpubg4"
              target="_blank"
              sx={{ border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",}}
            >
              <AssessmentIcon
                sx={{
                  fontSize: 40,
                 
                 
                }}
              />
            </IconButton>

            {/* GitHub */}
            <IconButton
              component="a"
              className="icons"
              href="https://github.com/Shankars57?tab=repositories"
              target="_blank"
              sx={{ border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue"}}
            >
              <GitHub
                sx={{
                  fontSize: 40,
                 
                 
                }}
              />
            </IconButton>
          </div>
        </div>
        <div className="hero-div">
          <img
            src={assets.port_img}
            alt="student"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
