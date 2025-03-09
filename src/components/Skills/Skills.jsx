import React from "react";
import { PieChart } from "@mui/x-charts";
import "./Skills.css";
const Skills = () => {
  const skillsData = [
    { id: 0, value: 95, label: "HTML5", color: "#FF5733" },
    { id: 1, value: 90, label: "CSS", color: "#2962FF" },
    { id: 2, value: 80, label: "JavaScript", color: "#FFD700" },
    { id: 3, value: 90, label: "Bootstrap", color: "#7952B3" },
    { id: 4, value: 70, label: "React", color: "#61DBFB" },
  ];

  return (
    <div className="skills">
      <div className="Skills-header">
        <h1> My SKILLS</h1>
        <p className="s-p1">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="skill-sets">
        <div className="tech">
          {skillsData.map((val, i) => {
            return (
              <div key={i} className={val.name + " div"}>
                <p>{val.label}</p>
                <span>{val.value}%</span>
              </div>
            );
          })}
          <div className="chart-container">
          <PieChart
  series={[
    {
      data: skillsData,
      innerRadius: 40,
      outerRadius: 80,
      label: {
        color:'white',
        fontSize: 14,
        fontWeight: "bold",
      },
    },
  ]}
  width={400}
  height={300}
 
/>
</div>
        </div>
      </div>
      <div className="btn-div">
        <button>
          <a href="#section1" className="about-btn">
            Download cv
          </a>
        </button>
      </div>
    </div>
  );
};

export default Skills;
