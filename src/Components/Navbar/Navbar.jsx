import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
 const [bg,setbg]=useState(false);
 
 useEffect(()=>{
  window.addEventListener('scroll',()=>{
window.scrollY > 500 ? setbg(true):setbg(false);

  })



 },[]);
 
  return (


        <nav className={`container ${bg?'darknav':''}`}>
          <img src={logo} alt="" className='logo'/>
    <ul>
        <li><Link to='hero' smooth='true' offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth='true' offset={-250} duration={500}>Courses</Link></li>
        <li><Link to='about' smooth='true' offset={-160} duration={500}>About</Link></li>
        <li><Link to='campus' smooth='true' offset={-250} duration={500}>Campus</Link></li>
        <li><Link to='testimony' smooth='true' offset={-250} duration={500}>Testimony</Link></li>
        <li><Link to='contact' smooth='true' offset={-250} duration={500}>Contact</Link></li>
      <li><a href='././Signup.html'><button className='btn'>Signup</button></a></li>
            <li><a href='././Login.html'><button className='btn'>Login</button></a></li>

    </ul>


        </nav>
      
   
  )
}

export default Navbar
