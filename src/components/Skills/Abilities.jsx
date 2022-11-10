import React from 'react'

const Abilities = ({abilities}) => {
  console.log(abilities);
  return (
    <div className='abilities'>
        <h2>Abilities</h2>
        {abilities.map((ability) => {
          return (
            <p key={ability}>{ability}</p>
            )
        })}
        </div>
  );
};

export default Abilities;