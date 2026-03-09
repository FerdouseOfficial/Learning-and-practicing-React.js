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
      <div className="flex flex-col gap-4 p-5 w-full md:w-2/3 h-[90%] border">
        <div className="p-5">
          <h2 className="text-2xl text-white uppercase">Recent Notes</h2>
        </div>

        <div className="flex flex-wrap gap-2 overflow-auto flex-1">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-52 flex-1 min-w-[150px]  bg-[url('data:image/jpeg;base64,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')] rounded bg-cover py-6 px-4"
              >
                <h3 className="leading-tight p-2 font-extrabold">
                  {elem.taskTitle}
                </h3>
                <p className="p-2">{elem.taskDescrip}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
