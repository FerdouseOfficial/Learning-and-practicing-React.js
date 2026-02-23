import React from "react";
import amazonLogo from "../assets/images/amazon2.png";

const Cards = (props) => {

  return (
    <div className="cards">
      <div className="top">
        <div className="logo">
          <img src={props.brandLogo} alt={props.companyName} />
        </div>
        <button>
          Save<i className="fa-regular fa-bookmark"></i>
        </button>
      </div>
      <div className="center">
        <div className="company">
          <h3>{props.companyName}</h3>
          <p className="posted-time">{props.datePosted}</p>
        </div>
        <div className="recruit-position-job_type">
          <h3 className="rc_post">{props.jobPosition}</h3>
          <div className="jb_type">
            <button>{props.tag1}</button>
            <button className="senior">{props.tag2}</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="salaryByHour_location">
          <div className="slByHr">
            <h3>{props.payments}</h3>
          </div>
          <div className="loc">
            <p>{props.location}</p>
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
