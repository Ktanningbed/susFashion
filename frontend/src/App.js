
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ImageUpload from './components/ImageUpload';
import Home from './pages/Home';
import Results from './Pages/Results';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Results/>}/>
      </Routes>
    </>
  );
}

export default App;
