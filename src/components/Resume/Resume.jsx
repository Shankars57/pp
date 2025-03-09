import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="resumes">
      <div className="resume_div">
        <h1>RESUME</h1>
      </div>
      <div className="details">
        <div className="details_divs">
          <div className="class10th">
            <p className="Year">2020</p>
            <p className="Standard">10th Standard</p>
            <p className="sc_name">Lutheran E.M School</p>
          </div>
          <div className="class10th">
            <p className="Year">2020-2022</p>
            <p className="Standard">Intermediate</p>
            <p className="sc_name">Pragati Vidyalaya Junior College</p>
          </div>
          <div className="class10th">
            <p className="Year">2022-2026</p>
            <p className="Standard">BTech</p>
            <p className="sc_name">
              Aditya College Of Engineering and Technology
            </p>
          </div>
        </div>
       
      </div>
     
    </div>
  );
};

export default Resume;
