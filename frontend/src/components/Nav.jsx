import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="nav-container">
        <div className="nav-title">
            susFashion
        </div>
        <div className="nav-buttons">
            <Link className="nav-button" to="/"><h3>Home</h3></Link>
            <Link className="nav-button" to="/"><h3>About</h3></Link>
            <Link className="nav-button" to="/"><h3>Contact</h3></Link>
        </div>
    </div>
  )
}

export default Nav