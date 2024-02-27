import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from  "../Components/Footer";
import UserImage2 from '../Components/UserImage2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
       <Navbar/>
       <UserImage2 heading="ABOUT." text="I'M A FRONT-END DEVELOPER. "/>
       <AboutContent/>
      <Footer />
    </div>
  )
}

export default About;
