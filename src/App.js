// import logo from './logo.svg';
import './App.css';
import HOME from './Home';
import ABOUT from './About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>try now hosting</h1>
      <div>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
      </div>
      <Routes>
        <Route exact path="/"  element={<HOME/>} />
        <Route  path="/about" element={<ABOUT/>}  />
      </Routes>
    </div>
  );
}

export default App;
