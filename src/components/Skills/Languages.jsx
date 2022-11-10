import React from 'react'

const Languages = ({languages}) => {
    console.log(languages);
  return (
    <div className='languages'>
        <h3>Idiomas</h3>

    {languages.map((language) => {
        return (
            <div className="language--data" key={JSON.stringify(language)}>
                <h4>{language.language}</h4>
                <p>{language.wrlevel}</p>
                <p>{language.splevel}</p>
            </div>
        )
    })}
    </div>
  )
};

export default Languages;