import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'
import React1 from "../assets/react1.png"
import React2 from "../assets/react2.png"


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>MY INTRO</h1>
        <p>Hi, I am a  Front-End developer in Kolkata./Present Address: Btm,Bengaluru. As a passionate front-end developer, I enjoy creating user-friendly and responsive websites using the latest web technologies, such as HTML, CSS, JavaScript, and React. Having completed a front-end development training course, I have showcased my web design proficiency and creativity through various personal projects. I am eager to learn new technologies and collaborate with other developers and clients to deliver exceptional websites</p>
        
        <Link to="/contact" className="btn">Contact</Link>
      </div>

      <div className="right">
        <div className="img-container">
        <div className="img-stack top">
            <img src={React1} className="img"  alt="PCR1" />
        </div>
        <div className="img-stack bottom">
            <img src={React2} className="img"  alt="PCR1" />
        </div>

        </div>
        </div>
    </div>
  )
}

export default AboutContent

