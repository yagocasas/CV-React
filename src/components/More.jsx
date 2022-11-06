import React from 'react'
import './More.scss';
import Habilities from './Skills/Habilities';
import Languages from './Skills/Languages';

const More = ({habilities, languages}) => {
  console.log(habilities, languages)
  return (
    <div className="more">
        <h1>More</h1>
        <Languages languages={languages}/>
        <Habilities habilities={habilities} />

    </div>
  )
}

export default More