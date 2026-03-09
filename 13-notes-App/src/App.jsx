import React, { useState } from "react";

const App = () => {
  // two way binding start here
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescrip, setTaskDescrip] = useState("");
  const [task, setTask] = useState([]);
  // two way binding stop here

  // stopping form reloading problem
  let formSubmition = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ taskTitle, taskDescrip });

    setTask(copyTask);

    console.log(copyTask); // print the updated value

    setTaskTitle("");
    setTaskDescrip("");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-black">
      {/* Form */}
      <form
        className="flex flex-col gap-4 m-4 md:m-10 w-full md:w-1/3"
        onSubmit={formSubmition}
      >
        <h2 className="text-white text-2xl uppercase mb-4 ">Add Notes</h2>

        <input
          type="text"
          placeholder="Enter the Task Title"
          className="py-3 px-3 w-full border-2 border-white rounded text-white outline-none font-medium"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <textarea
          placeholder="Describe the task"
          className="px-3 py-2 w-full h-32 border-2 border-white rounded text-white outline-none font-medium"
          value={taskDescrip}
          onChange={(e) => setTaskDescrip(e.target.value)}
        />

        <button
          className="bg-white text-black px-6 py-3 rounded-lg 
        shadow-lg hover:shadow-xl 
        active:translate-y-[2px] active:scale-y-95 active:shadow-inner 
        transition-all duration-150 cursor-pointer"
        >
          Add Note
        </button>
      </form>

      {/* Notes */}
      <div className="flex flex-col gap-4 p-5 w-full md:w-2/3 h-screen border">
        <div className="p-5">
          <h2 className="text-2xl text-white uppercase">Recent Notes</h2>
        </div>

        <div className="flex flex-wrap gap-2 overflow-auto flex-1">
          {task.map((elem, idx) => {
            return <div key={idx} className="text-black h-52 p-5 w-32 bg-white rounded">
                  <h3 className="text-center font-medium ">{elem.taskTitle}</h3>
                  <p >{elem.taskDescrip}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
