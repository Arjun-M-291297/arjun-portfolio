import "./CardStyles.css"
import React from 'react'
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$100</p>
                <p className="btc">- 3 Days -</p>
                <p className="btc">- 3 Pages -</p>
                <p className="btc">- Featured -</p>
                <p className="btc">- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$200</p>
                <p className="btc">- 2 Days -</p>
                <p className="btc">- 5 Pages -</p>
                <p className="btc">- Featured -</p>
                <p className="btc">- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$300</p>
                <p className="btc">- 5 Days -</p>
                <p className="btc">- 8 Pages -</p>
                <p className="btc">- Featured -</p>
                <p className="btc">- Responsive Design -</p>
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default Card
