import React from 'react'

const Card = (props) => {

//   console.log(name)
  return (
    <div>
        <div className="card">
            <img src="https://images.unsplash.com/photo-1770701195265-8af0dc148446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="Saitama" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button>View profile</button>
        </div>
    </div>
  )
}

export default Card