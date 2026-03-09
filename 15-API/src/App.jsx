// import React, { useState } from "react";
// import axios from "axios";

// const App = () => {
//   // function getData() {
//   //   const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
//   //   console.log(response);

//   // }
//   const [Data, setData] = useState()
//   const getData = async () => {
//     // This 1 way of doing it using the Asynchronous (Fetch) programming asynch/wait
//     // const response =  await fetch('https://jsonplaceholder.typicode.com/todos/1')

//     // const Data= await response.json()
//     // console.log(Data)

//     // This is the 2nd way:- by using axios okay
//     const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//     setData(response.data)
//   };
//   return (
//     <div>
//       <button onClick={getData}>Get Data</button>
//       <div>
//         {Data.map((elem, idx) => {
//           return  <h3>Hello </h3>
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [Data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    setData(response.data); // response.data is an array now
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {Data.map((item, idx) => (
          <h3 key={idx}>
            Hello {idx}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default App;
