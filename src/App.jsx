import './App.scss';
import About from './components/About';
import Hero from './components/Hero';

const App = () => {

  console.log("Hola desde App");
  return (
    <div className="app">
      <h1>App works!</h1>
      <Hero />
      <About />
    </div>
  );
}

export default App;
