import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'


function App() {

  return (
    <>
      <Navbar />
      <Hero />


      <div className="container">
        <Title subtitle="We Provide Master Courses" title="Our Product"/>
        <Program/>
      <About/>
      </div>

    </>
  )
}

export default App
