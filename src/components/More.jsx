import React from "react";
import "../styles/More.scss";
import Abilities from "./Skills/Abilities";
import Languages from "./Skills/Languages";

const More = ({ abilities, languages }) => {
  console.log(abilities, languages);
  return (
    <div className="name">
      <h1>More</h1>
      <div className="more">
        <Languages languages={languages} />
        <Abilities abilities={abilities} />
      </div>
    </div>
  );
};

export default More;
