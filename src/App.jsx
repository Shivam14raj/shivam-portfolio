import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
   <>
   <div>  
    <Router>
      <NavBar/>    
      <Routes>
        <Route path='/' element= {<Home/>} /> 
        <Route path='/about' element= {<About/>} /> 
        <Route path='/project' element = {<Projects/>} /> 
        <Route path='/Contact' element = {<Contact/>} /> 
        
      </Routes>
    </Router>
   </div>

   
   </>
  )
}

export default App
