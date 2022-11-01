import React from 'react';
import "./Hero.scss"

const Hero = ({info}) => {
  return (
    <div className='Hero'>
        <h1>{info.lastName}</h1>
        <h3>{info.email}</h3>
        <h3>{info.phone}</h3>
    </div>
  )
}

export default Hero;