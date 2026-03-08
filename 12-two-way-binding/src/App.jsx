import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('');
  const formSubmition = (e) => {
    e.preventDefault();
    console.log(`Form submitted by ${title}`);
    setTitle("")

  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formSubmition(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
