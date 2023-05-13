
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
