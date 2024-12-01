import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-title'>Routing</div>
        <div className='header-links'>
          <Link to ="/" >Home</Link>
          <Link to ="/about" >About</Link>
          <Link to ="/blog" >Blog</Link>
          <Link to ="/contact" >Contact</Link>
            
        
      </div>
    </div>
  )
}

export default Header
