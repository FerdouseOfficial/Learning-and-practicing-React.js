import React from 'react'

const App = () => {
  let a = 20;
  function changeA() {
    // console.log(a)
    a++
    console.log(a)
  }
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Click</button>
    </div>
  )
}

export default App 

// const (Read only , write only) = then useState(the value )