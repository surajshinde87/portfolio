import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


const App = () => {
  return (
  <div className='min-h-screen w-full'>
      <Router>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router> 
  </div>
  )
}

export default App
