import React from 'react'
import "./WorkCardStyles.css"
import pro1 from "../assets/pro1.jpg"
import { NavLink } from 'react-router-dom'
const WorkCard = () => {
  return (
    <div className='work-container'>
      <div className='project-container'>
        <div className='project-card'>
            <img src={pro1} alt=""></img>
            <h2 className='project-title'>Todo App</h2>
            <div className='pro-details'>
                {/* <p>This is text</p> */}
                <div className='pro-btns'>
                    <NavLink to="https://sweet-boba-e71c72.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">VIEW</NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
