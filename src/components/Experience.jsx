import React from "react";
import "./Experience.scss";
import { useState } from "react";

const Experience = ({ experience }) => {
  // console.log('RETAIL', experience.retail);
  // console.log('SPORTS', experience.sports);
  console.log("todoooo", experience);
  const Retail = experience.retail;
  console.log("retail", Retail);
  const Sport = experience.sport;
  console.log("sports", Sport);

  const [showExperience, setShowExperience] = useState(true);

  return (
    <div className="name">
      <h1>Experience</h1>

      <button onClick={() => setShowExperience(!showExperience)}>
        {showExperience ? "Ocultar" : "Mostrar"} Experience
      </button>

      {showExperience 
          ? <>
          {Retail.map((element) => {
            return (
              <div key={JSON.stringify(element)}>
                <h2 className="name">{element.name}</h2>
                <h3>{element.where}</h3>
                <p>{element.date}</p>
                <p>{element.description}</p>
              </div>
            );
          })};
          {Sport.map((element) => {
            return (
              <div key={JSON.stringify(element)}>
                <h2 className="name">{element.name}</h2>
                <h3>{element.where}</h3>
                <p>{element.date}</p>
                <p>{element.description}</p>
              </div>
            );
          })}
          </> 
          : <div>Experience Oculta</div>
      }

     
    </div>
  );
};

export default Experience;
