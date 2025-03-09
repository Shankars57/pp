import React from "react";
import "./Services.css";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ScienceIcon from "@mui/icons-material/Science";
import SearchIcon from "@mui/icons-material/Search";
const Services = () => {
  return (
    <div className="services_div">
      <div className="service_header">
        <h1>Services</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="service_content">
        <div className="service_grid">
          <div className="service_card">
            <SearchIcon className="icons_ser" style={{ fontSize: 50, color: "yellow" }}></SearchIcon>
            <p>Web Design</p>
          </div>
          <div className="service_card">
            <LightbulbIcon className="icons_ser"
              style={{ fontSize: 50, color: "yellow" }}
            ></LightbulbIcon>
            <p>Web Developer</p>
          </div>
          <div className="service_card">
            <ScienceIcon className="icons_ser"
              style={{ fontSize: 50, color: "yellow" }}
            ></ScienceIcon>
            <p>App Developer</p>
          </div>
          <div className="service_card">
            <LightbulbIcon className="icons_ser"
              style={{ fontSize: 50, color: "yellow" }}
            ></LightbulbIcon>
            <p>Branding</p>
          </div>
          <div className="service_card">
            <ScienceIcon className="icons_ser"
              style={{ fontSize: 50, color: "yellow" }}
            ></ScienceIcon>
            <p>Product Strategy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
