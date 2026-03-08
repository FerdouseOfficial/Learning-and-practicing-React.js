import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }
  function jumtFive() {
    setNum(num + 5);
  }
  return (
    <div className="container">
      <div className="digits">
        <h1>{num}</h1>
      </div>
      <div className="controlers">
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>Decrease</button>
      </div>
      <button onClick={jumtFive}>Jump by 5</button>
    </div>
  );
};

export default App;
