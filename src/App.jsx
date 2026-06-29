import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimony from './Components/Testimony/Testimony'


function App() {

  return (
    <>
      <Navbar />
      <Hero />


      <div className="container">
        <Title subtitle="We Provide Master Courses" title="Our Product"/>
        <Program/>
      <About/>
      <Title subtitle="Our Campus" title=" Gallery"/>
      <Campus/>
      <Title subtitle="Testimony Campus" title=" what student says about us"/>
      <Testimony/>
      </div>

    </>
  )
}

export default App
