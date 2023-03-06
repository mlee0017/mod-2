import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import GameItems from './pages/GameItems'

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gameitems" element={<GameItems />} /> 
      </Routes>
   
    </div>
  );
}

export default App;

//use params for url path