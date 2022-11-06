import React from 'react';
import './Education.scss';

const Education = ({education}) => {
  console.log('edu', education);
  return (
    <div className="education">
        <h1>Education</h1>

    {education.map((element) => {
      // console.log(element);
      return (
        <div key={JSON.stringify(element)}>
          <h2 className="name">{element.name}</h2>
          <p>{element.date}</p>
          <p>{element.where}</p>
        </div>
      );
    })}

    </div>
  )
};

export default Education;