import React from 'react'
import "./Navbar.css"
import bmw from '../images/logo2.png';


const Navbar = () => {
  return (
    <div className='contener'>
    
        <div className='left'>
          <img src={bmw} alt="Company logo" /><h2>Hospital Recommendation System</h2>
        </div>
        
        <div className='navbar'>
        <nav>
          <ul>
            <li> <button style={{backgroundColor:'red', width:'18cln0px' }}>BOOK AN AMBULANCE</button></li>
            <li> <button style={{width:'130px'}}>Post a View</button></li>
            <li> <button>Login</button></li>
          </ul>

        </nav>
      </div>
    </div>
  )
}

export default Navbar
