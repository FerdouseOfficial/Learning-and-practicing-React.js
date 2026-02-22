import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="aman" age={21} />
      <Card user="Raiyan" age={21} />
      <Card user="Briyan" age={21} />
    </div>
  )
}
 
export default App