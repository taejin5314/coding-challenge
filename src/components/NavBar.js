import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar({ title }) {
  return (
    <div className="navBar">
      <div className="navBar-left">
        <h2>{title}</h2>
      </div>
      <div className="navBar-right">
        <Link to="/">Home</Link>
        <Link to="/liked">Like</Link>
      </div>
    </div>
  )
}

export default NavBar
