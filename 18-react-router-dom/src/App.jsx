import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'
import Home from './component/Home'

const App = () => {
  console.log("Fuck off you little brat")
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App