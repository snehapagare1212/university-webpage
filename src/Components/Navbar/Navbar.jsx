import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useEffect } from 'react';

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
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
        <li>Campus</li>
        <li>Testimony</li>
        <li><button className='btn'>Contact</button></li>


    </ul>


        </nav>
      
   
  )
}

export default Navbar
