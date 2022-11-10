import React from 'react'

const Abilities = ({abilities}) => {
  console.log(abilities);
  return (
    <div className='abilities'>
        <h3>Habilidades</h3>
        {abilities.map((ability) => {
          return (
            <p key={ability}>{ability}</p>
            )
        })}
        </div>
  );
};

export default Abilities;