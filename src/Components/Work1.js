import "./ProjectWorkStyles.css";

import WorkCardData from "./WorkCardData.js";
import React from 'react'

import ProjectWork from "./ProjectWork.js";


const Work = () => {
  return (
  <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
       {WorkCardData.map((val, ind)=>{
        return(
          <ProjectWork 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          text={val.text}
          view={val.view}
          />
        )
       }
       )}
    </div>
  </div>
  );
}

export default Work;
