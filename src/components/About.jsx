import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
import "../styles/About.scss";

const About = ({ metadata }) => {
  // console.log("metadata", metadata);

  return (
    <div className="about">
      <h2>About Me!</h2>
      {metadata.map((element) => {
        return <p key={JSON.stringify(element.info)}>{element.info}</p>;
      })}
    </div>
  );
};

export default About;
