import "./ProjectWorkStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";


const ProjectWork = (props) => {
  return (
    <div className="project-card">
      
      <img src={props.imgsrc} alt="image" />
       <h2 className="project-title">{props.title}</h2>
      <div className="pro-details"></div>
      <p>{props.text}</p>
      <div className="pro-btn">
        <NavLink to={props.view} className="btn">
          view
        </NavLink>
        <NavLink to="https://github.com/SOUMYAJIT06121999" className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default ProjectWork;
