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
import Footer from "./components/Footer";

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
          <Render />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </MyContext.Provider>
  );
};

export default App;
