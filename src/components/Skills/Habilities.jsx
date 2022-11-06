import React from 'react'

const Habilities = ({habilities}) => {
  console.log(habilities);
  return (
    <div className='habilities'>
        <h2>Habilities</h2>
        {habilities.map((hability) => {
          return (
            <p key={hability}>{hability}</p>
            )
        })}
        </div>
  );
};

export default Habilities;