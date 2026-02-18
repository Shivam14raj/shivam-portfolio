import './Hamburger.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>  
      </div>

      <div className={`menu-overlay ${open ? 'open' : ''}`}>  
        <ul className='nav-links'>
          <li>
            <Link to="/" onClick={() => setOpen(false)} >Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)} >About</Link>
          </li>
          <li>
            <Link to="/project" onClick={() => setOpen(false)} >Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} >Contact</Link>
          </li> 
          
        </ul>
      </div>
    </>
  );
};

export default Hamburger
