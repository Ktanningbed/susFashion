
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
