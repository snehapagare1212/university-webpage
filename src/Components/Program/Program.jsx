import React from 'react'
import './Program.css'
import program1 from '../../assets/program1.png'
import program2 from '../../assets/program2.png'
import program3 from '../../assets/program3.png'

import programi1 from '../../assets/programi1.png'
import programi2 from '../../assets/programi2.png'
import programi3 from '../../assets/programi3.png'


const Program = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                   <img src={programi1} alt="" /> 
                   <p>Graduation</p>

            </div>

        </div>
       <div className="program">
            <img src={program2} alt="" />

            <div className="caption">
                   <img src={programi2} alt="" /> 
                   <p>Graduation</p>

            </div>

        </div>
      
       <div className="program">
            <img src={program3} alt="" />

            <div className="caption">
                   <img src={programi3} alt="" /> 
                   <p>Graduation</p>

            </div>

        </div>
      
    </div>
  )
}

export default Program
