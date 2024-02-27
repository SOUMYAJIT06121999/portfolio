import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from  "../Components/Footer";
import UserImage2 from '../Components/UserImage2';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <UserImage2 heading="CONTACT." text="I'M A FRONT-END DEVELOPER. "/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact;
