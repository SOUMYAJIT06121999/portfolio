import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from  "../Components/Footer";
import UserImage2 from '../Components/UserImage2';
import Work1 from '../Components/Work1';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <UserImage2 heading="PROJECTS." text="My PROJECTS "/>
      <Work1/>
      <Footer />
    </div>
  )
}

export default Project;
