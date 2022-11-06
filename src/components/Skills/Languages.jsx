import React from 'react'

const Languages = ({languages}) => {
    console.log(languages);
  return (
    <div className='languages'>
        <h2>Languages</h2>

    {languages.map((language) => {
        return (
            <div key={JSON.stringify(language)}>
                <h4 className="name">{language.language}</h4>
                <p>{language.wrlevel}</p>
                <p>{language.splevel}</p>
            </div>
        )
    })}
    </div>
  )
};

export default Languages;