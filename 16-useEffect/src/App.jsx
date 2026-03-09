import React, { useEffect, useState } from "react";

const App = () => {
  useEffect(function () {
    console.log("use effect is running");
  }, [num]);
  const [num, setnum] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <div>
      <h1>Num {num}</h1>
      <h1>Num {num2}</h1>
      <button
        onMouseOver={() => {
          setnum(num + 1);
        }}
        onMouseLeave={() => {
          setNum2(num2+10)
        }}
      >
        hover
      </button>
    </div>
  );
};

export default App;
