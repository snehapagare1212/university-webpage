import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'


function App() {

  return (
    <>
      <Navbar />
      <Hero />


      <div className="container">
        <Title/>
        <Program />
      
      </div>

    </>
  )
}

export default App
