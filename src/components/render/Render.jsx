import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../shared/Context'
import Hero from '../Hero'
import About from '../About'
import Education from '../Education'
import Experience from '../Experience'
import More from '../More'
import { CV } from '../../utils/data/CV'
import './Render.scss'
const { hero, education, experience, languages, abilities } = CV;

const Render = () => {

    const {data} = useContext(MyContext)
  return (
    <div className='render'>
        {data === 'info' && <Hero info={hero}/>}
        {data === 'metadata' && <About metadata={hero.aboutMe}/>}
        {data === 'education' && <Education education={education} />}
        {data === 'experience' && <Experience experience={experience}/>}
        {data === 'more' && <More languages={languages} abilities={abilities} />}
    </div>
  )
}

export default Render;