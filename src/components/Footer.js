import React from 'react'
import "./FooterStyles.css"
import {  FaHome, FaLinkedin, FaMailBulk, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="footer">
        <div className='footer-container'>
            <div className='left'>
            <h3>This is Arjun. A frontend developer.</h3>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>Mepparambath House, Karthika</p>
                        <p>Kadalundi, Kozhikode</p>
                        <p>Kerala</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='phone'>
                    <FaPhoneAlt size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        <h4>9895656660</h4>                
               </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        <h4>arjun.krishna.291297@gmail.com</h4>                
               </div>
                <div className='social'>
                <FaTwitter size={30} style={{color:"#1DA1F2",marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#0077B5",marginRight:"1rem"} } className="twitter-color"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
