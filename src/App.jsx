import { CV } from './utils/data/CV';
import Hero from './components/Hero';
import About from './components/About';
import './App.scss';

const App = () => {
console.log(CV);

  return (
    <div className="app">
      const { hero } = CV;
      <nav></nav>
      <aside></aside>
      <main>
       <Hero info={hero}/>

       <About metadata={hero.aboutMe}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
