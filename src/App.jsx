import { CV } from './utils/data/CV';
// import { useState } from 'react';

import './App.scss';
import Hero from './components/Hero';
import About from './components/About'
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More'


const App = () => {
  console.log(CV);
  const { hero, education, experience, languages, habilities } = CV;


  return (
    <div className="app">
      <nav>
      </nav>
      <aside>
        <Hero info={hero} />
      </aside>
      <main>
        <About metadata={hero.aboutMe}/>
        <Education education={education}/>
        <Experience experience={experience}/> 
       <More 
          languages={languages}
          habilities={habilities}
          />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
