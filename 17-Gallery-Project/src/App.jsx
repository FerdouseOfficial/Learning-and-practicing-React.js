import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`,
    );
    setUserData(response.data);
  };
  useEffect(() => {
    getData();
  }, [index]);
  let printUserData = (
    <h3 className="text-gray-200 font-bold tracking-tight mt-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading......
    </h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <a href={elem.url} target="_blank">
          <div>
            <div className="h-52 w-44 bg-white p-0.5 overflow-hidden">
              <img
                className="h-full w-full rounded object-cover"
                src={elem.download_url}
                alt="URLs"
              />
            </div>
            <h2 className="font-bold tracking-wide">{elem.author}</h2>
          </div>
        </a>
      );
    });
  }

  return (
    <div className="bg-black h-screen w-full overflow-auto text-gray-200 mt-12 p-4">
      <h2 className="fixed bg-red-500 p-4 text-white font-bold text-5xl">
        {index}
      </h2>
      <div className="flex flex-wrap flex-1 gap-2 text-center">
        {printUserData}
      </div>
      <div className="flex justify-center items-center gap-3 p-4">
        <button
        style={{opacity: index ==1 ? 0.5 : 1}}
          className="bg-amber-300 text-black py-1.5 font-bold text-sm px-5 rounded active:scale-95 cursor-pointer"
          onClick={() => {
            if (index > 1) {
              setIndex([]); // what is the meaning of this two line try to understand it okay
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className="bg-amber-300 text-black py-1.5 font-bold text-sm px-5 rounded active:scale-95 cursor-pointer"
          onClick={() => {
            setIndex([]); // what is the meaning of this two line try to understand it okay
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

// I will add more feature here
