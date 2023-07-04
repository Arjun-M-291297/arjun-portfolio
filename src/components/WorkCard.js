import React from 'react'
import "./WorkCardStyles.css"
import pro1 from "../assets/pro1.jpg"
import { NavLink } from 'react-router-dom'
const WorkCard = () => {
  return (
    <div className='work-container'>
      <div className='project-container'>
        <div className='project-card'>
            <img src={pro1}></img>
            <h2 className='project-title'>Project Title</h2>
            <div className='pro-details'>
                <p>This is text</p>
                <div className='pro-btns'>
                    <NavLink to="url.com" className="btn">VIEW</NavLink>
                    <NavLink to="url.com" className="btn">SOURCE</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
