import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import { LinkedIn, GitHub } from "@mui/icons-material"; // LinkedIn Icon
import CodeIcon from "@mui/icons-material/Code"; // Generic Code Icon for CodeChef
import TerminalIcon from "@mui/icons-material/Terminal"; // Generic for LeetCode
import AssessmentIcon from "@mui/icons-material/Assessment"; // Generic for HackerRank
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const Header = () => {
  return (
    <div className="hero">
      <div className="grid">
        <div className="intro">
          <h4>Hello, It's Me</h4>
          <h1>B.CH.D.G SHANKAR</h1>
          <h4>
            And I'm A <span>Frontend Developer.</span> <br />
            And A <span style={{ color: "yellow"  }}>FreeLancer.</span>
          </h4>

          <div className="links">
            <Tooltip title="LinkedIn">
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/ch-d-g-shankar-bonam-002bb2321"
                target="_blank"
                className="icons"
                sx={{
                  border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",
                }}
              >
                <LinkedIn
                  sx={{
                    fontSize: 40,
                    color: "#0077B5",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="LeetCode">
              <IconButton
                component="a"
                className="icons"
                href="https://leetcode.com/u/shenkarb762/"
                target="_blank"
                sx={{
                  border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",
                }}
              >
                <TerminalIcon
                  sx={{
                    fontSize: 40,
                    color: "green",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="CodeChef">
              <IconButton
                component="a"
                className="icons"
                href="https://www.codechef.com/users/shankar_s58"
                target="_blank"
                sx={{
                  border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",
                }}
              >
                <CodeIcon
                  sx={{
                    fontSize: 40,
                    color: "blue",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="HackerRank">
              <IconButton
                component="a"
                className="icons"
                href="https://www.hackerrank.com/profile/shankarpubg4"
                target="_blank"
                sx={{
                  border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",
                }}
              >
                <AssessmentIcon
                  sx={{
                    fontSize: 40,
                    color: "red",
                  }}
                />
              </IconButton>
            </Tooltip>

            {/* GitHub */}
            <Tooltip title="GitHub">
              <IconButton
                component="a"
                className="icons"
                href="https://github.com/Shankars57?tab=repositories"
                target="_blank"
                sx={{
                  border: "2px solid red",
                  borderRadius: "50%",
                  padding: "2px",
                  boxShadow: "0 0px 5px 0 blue",
                }}
              >
                <GitHub
                  sx={{
                    fontSize: 40,
                    color: "white",
                  }}
                />
              </IconButton>
            </Tooltip>
          </div>
          <div className="button-div">
            <button>
              {" "}
              <a href="#projects" className="buttons">
                Projects
              </a>
            </button>
            <button>
              <Link to="/resume" className="buttons">
                Resume
              </Link>
            </button>
          </div>
        </div>
        <div className="hero-div">
          <img src={assets.port_img} alt="student" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
