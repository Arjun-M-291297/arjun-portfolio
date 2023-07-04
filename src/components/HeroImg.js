import "./HeroImgStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import IntroImg from "../assets/intro-bg.jpg"
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <span className="about-content">Hi, I am Arjun M. </span>
        <span className="about-content">I am a friendly Front-End Developer.</span>
        <span className="about-content"><span className="react-color">React</span> / <span className="vue-color">Vue</span> Developer.</span>
        <div className="about-buttons">
        <Link to="/project" className="btn">
        PROJECTS</Link>
        <Link to="/contact" className="btn-light">
        CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
