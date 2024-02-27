import "./UserImgStyles2.css"

import React, { Component } from 'react'

class UserImage2 extends Component  {
  render() {
    return (
      <div className="User-Image2"> 
      <div className="heading">
      <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
      </div>
    )
  }
  
}

export default UserImage2
