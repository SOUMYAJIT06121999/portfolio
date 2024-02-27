import "./UserImgStyles.css"
import React from "react";

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const UserImage = () => {
    return (
    <div className="user">
        <div className="mask">
    <img className="into-img" src={IntroImg} alt="IntroImg"/>
    </div>
    <div className="content">
    <p>HI, I'M A FRONT-END DEVELOPER.</p>
    <h1>REACT.JS DEVELOPER.</h1>
    <div>
       <Link to="/project" className="btn">Projects</Link> 
       <Link to="/contact" className="btn btn-light" >Contact</Link> 
    </div>
    </div>
    </div>
    );
};

export default UserImage;