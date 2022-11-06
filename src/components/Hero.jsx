import React from 'react';
import "./Hero.scss"

const Hero = ({info}) => {
  return (
    <div className='hero'>
        <h1>Datos personales</h1>
        <img src={info.image} alt={info.name} />
        <h1>{info.name} {info.lastName}</h1>
        <h4>{info.email}</h4>
        <h4>{info.phone}</h4>
        <h4>{info.city}</h4>
        <h4>{info.gitHub}</h4>
    </div>
  )
}

export default Hero;