import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import React from 'react'
import ReactImg1 from "../assets/pexels-hitesh-choudhary-693859.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a React / Vue Front-end developer. I create responsive secure websites.</p>
            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <img src={ReactImg1} className="img" />
            </div>
        </div>
    </div>
  )
}

export default AboutContent
