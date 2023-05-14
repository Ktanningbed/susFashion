
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import ImageUpload from './components/ImageUpload';
import Home from "./Pages/Home";
import Nav from './components/Nav';
import Results from './Pages/Results';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/result" element={<Results/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
