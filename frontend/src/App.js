
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import Home from './pages/Home'
import Nav from './components/Nav'
import Results from './Pages/Results';
function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Results/>}/>
      </Routes>
    </>
  );
}

export default App;
