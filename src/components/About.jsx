import React from "react";
// import { useState } from "react";
import "./About.scss";

const About = ({ metadata }) => {
  console.log('metadata', metadata);

  return (
    <div className="about">
      <h1>About Me!</h1>

      {metadata.map((element) => {
        return <h4 key={JSON.stringify(element.info)}>{element.info}</h4>;
      })}
    </div>
  );
};

export default About;
