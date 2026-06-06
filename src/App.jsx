import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Dd from './Components/DD/Dd'

function App() {

  return (
    <>
<Navbar/>
<Hero/>


<div className="container">
<Program/>  
<Dd/>
</div>

     </>
  )
}

export default App
