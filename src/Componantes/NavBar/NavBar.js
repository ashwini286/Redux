import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const items = useSelector((state) => state.cart)
  return (
    
    <div className='main-nav '>
        <h3>Film Store</h3>
        <div className='menu-link '> 
         <ul>
        <li> <Link to='/' >Film_World</Link></li>
        <li>  <Link to='/cart'>Film_Cart</Link> </li> 
        </ul>
        </div>
        <span className='cartCount'>Cart items: {items.length}</span>
    </div>
      
    
  )
}

export default NavBar
