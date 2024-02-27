import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return <div className="from">
    <form>
    <label>Your Name</label>
    <input type="text"></input>
    <label>Email</label>
    <input type="text"></input>
    <label>Subject</label>
    <input type="text"></input>
    <label>Message</label>
    <textarea rows="6" placeholder="Type your Message here"/>
    <button className="btn">Submit</button>
    </form>
  </div>
  
}

export default Form
