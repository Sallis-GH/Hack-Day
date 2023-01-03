import './__style__/App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home';
import Pokedex from './routes/Pokedex';
import Teamcreator from './routes/Teamcreator';
import Shinycalc from './routes/Shinycalc';


function App() {

  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home />}></Route> 
        <Route path="/pokedex" element={<Pokedex />}></Route> 
        <Route path="/teamcreator" element={<Teamcreator />}></Route> 
        <Route path="/shinycalc" element={<Shinycalc />}></Route> 
      </Routes> 
    </div>
  );
}

export default App;
