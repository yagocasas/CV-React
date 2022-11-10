import React from "react";
import "../styles/Education.scss";

const Education = ({ education }) => {
  // console.log("edu", education);
  return (
    <div className="education--box">
      <h2>Educación</h2>

      {education.map((element) => {
        // console.log(element);
        return (
          <div className="education--data" key={JSON.stringify(element)}>
            <h3>{element.name}</h3>
            <p>{element.date}</p>
            <p>{element.where}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
