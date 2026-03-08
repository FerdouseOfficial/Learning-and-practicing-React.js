import React from 'react'

const App = () => {
  const formSubmition= (e) => {
    e.prevent
    console.log("Form Submitted")
  }
  return (
    <div>
      <form onSubmit={(e) => {
        formSubmition(e);
      }}>
        <input type="text"  placeholder='Enter your name '/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App