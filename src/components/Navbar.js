import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import React, { useState } from 'react'

const Navbar = () => {
  const [color,setColor]=useState(false)
  const changeColor=()=>{
    if(window.pageYOffset>=100){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener("scroll",changeColor)
  return (
    <div className={color?"header header-bg":"header"}>
      <Link to="/">
      <h1><span className="fc-yellow">Port</span>folio.</h1>
      </Link>
      <ul className="nav-menu">
        <li> <Link to="/">About</Link></li>
        <li> <Link to="/experience">Experience</Link></li>
        <li> <Link to="/project">Project</Link></li>
        <li> <Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
