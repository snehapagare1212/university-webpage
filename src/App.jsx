import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'

function App() {

  return (
    <>
<Navbar/>
<Hero/>


<div className="container">
<Program/>  

</div>

     </>
  )
}

export default App
