import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

import "./FooterStyles.css";

import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={23} style={{color:"#fff", marginRight:"2rem"}}/>
            <div>
                <p>Duttapukur,Gangapur</p>
                <p>North 24 Pgs,West Bengal.</p>
                <p>Present Address: Btm,Bengaluru,Karnataka.</p>
            </div>
        </div>
        <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
        +91 7980237641</h4>
        
        </div>
        <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
        Soumyajitbhadra20@gmail.com</h4>
        
        </div>
    </div>

    <div className="right">
        <h4>AboutMe</h4>
        <p>A keen Front-End developer who likes to develop user-oriented and adaptable websites using web technologies including HTML, CSS, JavaScript and libraries like React. After doing a  Front-End  development training course, I have been involved in several personal projects to demonstrate my web application design ability and knowledge. Willing to learn new technologies and work together with other developers as well as clients in order to provide exceptional websites</p>
        <div className="social">
        <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
        <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Footer
