import React from 'react'
import img from './assets/PIC04479-removebg-preview.png';

export default function Home() {
  return (
    <>
    
    <div className="desc">
     <h2>Hi Im</h2>
      <h1>AMAL THILAKAN</h1>
      <h2>Im a developer</h2>
    </div>

    <div>
      <img className='plimg' src={img} alt="image"/>
    </div>
    </>
  )
}
