// components/navbar/Navbar.js
 
import React from 'react';
import { Link } from 'react-router-dom';
 
const navbar = () => {
  return (
    <nav className="nav-style">
      
        <Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>

    </nav>
  )
}
 
export default navbar;