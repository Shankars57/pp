import React from "react";
import "./Projects.css";
import { assets } from "../../assets/assets.js";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: assets.project_1,
      size: "small",
    },
    { id: 2, image: assets.project_2, size: "big" },
    { id: 3, image: assets.project_3, size: "big" },
    { id: 4, image: assets.project_4, size: "small" }
  ];
  console.log(projects[0].image);
  
  return (
    <div className="project_div">
      <div className="project_header">
        <h1>Projects</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="div_project">
      <div className="project_grid">
      {
        projects.map((image,index)=>{
          return(
           
            <div className="card" key={index}  >
              <img src={image.image}  alt="projects" />
              <div className="card-body">
                <h1>My projects {index+1}</h1>
                <a href="#">Explore my projects</a>
              </div>
            </div>
           
          )
        })
      }
      </div>
      </div>
    </div>
  );
};

export default Projects;
