import React from "react";
import amazonLogo from "../assets/images/amazon.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="top">
        <img src={amazonLogo} alt="Amazon Logo" />
        <button>
          Save<i className="fa-regular fa-bookmark"></i>
        </button>
      </div>
      <div className="center">
        <div className="company">
          <h4>Amazon</h4>
          <p className="posted-time">5 days ago</p>
        </div>
        <div className="recruit-position-job_type">
          <h3 className="rc_post">Senior UI/UX Designer</h3>
          <div className="jb_type">
            <button>Part-Time</button>
            <button>Senior Level</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="salaryByHour_location">
          <div className="slByHr">
            <h3>$120/hr</h3>
          </div>
          <div className="loc">
            <p>Mumbai, India</p>
          </div>
        </div>
        <div className="apply">
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
