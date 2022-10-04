import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Contact from './pages/Contact'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
