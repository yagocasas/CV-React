import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Experience.scss";
// import { useState } from "react";

const Experience = ({ experience }) => {
  // console.log('RETAIL', experience.retail);
  // console.log('SPORTS', experience.sports);
  console.log("todoooo", experience);
  const Retail = experience.retail;
  console.log("retail", Retail);
  const Sport = experience.sport;
  console.log("sports", Sport);

  // const [showExperience, setShowExperience] = useState(true);

  return (
    <div className="experience--box">
      <h2>Experience</h2>

      <div className="sector">
        <div className="retail">
          <h3>Retail</h3>
          {Retail.map((element) => {
            return (
              <div className="s--info" key={JSON.stringify(element)}>
                <h4>{element.name}</h4>
                <p>{element.where}</p>
                <p>{element.date}</p>
                <p>{element.description}</p>
              </div>
            );
          })}
          ;
        </div>
        <div  className="sports">
          <h3>Sports</h3>
          {Sport.map((element) => {
            return (
              <div className="s--info" key={JSON.stringify(element)}>
                <h4>{element.name}</h4>
                <p>{element.where}</p>
                <p>{element.date}</p>
                <p>{element.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* </>  */}
      {/* : <div>Experience Oculta</div> */}
      {/* } */}
    </div>
  );
};

export default Experience;
