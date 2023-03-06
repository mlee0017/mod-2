import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Objects from './pages/Objects'

function App() {
  // let url = ""
  // fetch(url)
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data)
  // })


  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/objects" element={<Objects />} /> 
      </Routes>
   
    </div>
  );
}

export default App;
