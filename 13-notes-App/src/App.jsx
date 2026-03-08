import React from "react";

const App = () => {
  return (
    <div className="flex  h-screen w-full bg-black">
      <form className="flex flex-col gap-4 m-10 ">
        <input
          type="text"
          placeholder="Enter the Task Title"
          className="py-5 px-5 w-120 border-2 border-white rounded  text-white outline-none"
        />
        <textarea
          type="text"
          placeholder="Describe the task"
          className="px-5 py-2 w-full h-40 border-white border-2 rounded text-white outline-none"
        />
        <button className="bg-white rounded p-2 text-center outline-none cursor-pointer
        ">Create Note</button>
      </form>
    </div>
  );
};

export default App;
