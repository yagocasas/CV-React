import "./App.scss";
import { CV } from "./utils/data/CV";
import { useState } from "react";
import { MyContext } from "./shared/Context";

import Hero from "./components/Hero";
// import About from "./components/About";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
// import More from "./components/More";
import Navbar from "./components/Navbar";
import Render from "./components/render/Render";

// import Render from "./components/render/Render";

const { hero } = CV;

const App = () => {
  const [data, setData] = useState('metadata');

  return (
    <MyContext.Provider value={{data,setData,}}>
      <div className="app">
        <nav>
          <Navbar />
        </nav>
        <aside>
          <Hero info={hero} />
        </aside>
        <main className="contain">
          {/* <About metadata={hero.aboutMe} />
          <Education education={education} />
          <Experience experience={experience} />
          <More languages={languages} abilities={abilities} /> */}
          <Render />
        </main>
        <footer></footer>
      </div>
    </MyContext.Provider>
  );
};

export default App;
