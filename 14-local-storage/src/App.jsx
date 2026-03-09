import React from "react";

const App = () => {
  let user = localStorage.getItem("Billionaire");
  console.log(user);
  return <div>App</div>;
};

export default App;

// setItem/getItem/removeItem/clearItem this four functonalities or properties local storage have
// JSON.stringify/JSON.parse 