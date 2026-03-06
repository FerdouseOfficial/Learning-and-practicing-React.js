import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = () => {
  return (
    <div className='bg-red-900 h-screen w-full'>
        <h2>Section1</h2>
        <Navbar/>
        <Page1Content/>
    </div>
  )
}

export default Section1