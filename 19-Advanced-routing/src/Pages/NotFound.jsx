import React from "react";

const NotFound = () => {
  return (
    <div className="relative w-full h-screen font-sans text-white bg-gradient-to-b from-black to-blue-800 overflow-hidden">
      {/* Ground */}
      <div className="absolute bottom-0 w-full h-1/4 bg-black sm:h-0"></div>

      <div className="relative flex flex-row justify-around w-11/12 h-full mx-auto pb-1/4 sm:flex-col sm:pb-0">
        {/* Left Section */}
        <div className="relative w-2/5 sm:w-full sm:h-2/5 sm:absolute sm:top-0 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-[9rem] sm:text-[7rem] leading-[1.3] sm:leading-[1.15] text-shadow-glow mb-2">
              404
            </h1>
            <p className="text-lg sm:text-base max-w-xl mx-auto px-4">
              Looks like the page you were looking for is no longer here.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-1/2 sm:w-full sm:h-3/5 sm:absolute sm:bottom-0">
          <svg
            className="absolute bottom-0 max-w-full max-h-full sm:static sm:w-full sm:h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="51.5 -15.288 385 505.565"
          >
            {/* Bench Legs */}
            <g className="fill-black">
              <path
                d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111
              v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z"
              />
            </g>

            {/* Bench Top */}
            <g className="stroke-black stroke-[1px] fill-[#5B3E2B]">
              <path
                d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333
              c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583
              c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723
              c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028
              c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z"
              />
            </g>

            {/* Lamp */}
            <g id="lamp">
              <path
                className="fill-gray-800"
                d="M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917
              c0-1.257,0.73-2.278,1.633-2.278h10.621c0.903,0,1.633,1.02,1.633,2.278V421.997z"
              />
              <circle
                className="fill-white opacity-80 animate-pulse"
                cx="119.676"
                cy="44.22"
                r="40.51"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
