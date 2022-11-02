import React from 'react';
import "./About.scss"

const About = ({ metadata }) => {
  console.log(metadata);
  return (
    <div className='About'>
      <h1>About</h1>

      {metadata.map(element => {
        return (
          <h4 key={JSON.stringify(element.info)} ></h4>
        );
      })}
    </div>
  )
};

export default About;