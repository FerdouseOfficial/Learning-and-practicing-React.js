import React from "react";
import Cards from "./components/cards";

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "3 days ago",
    jobPosition: "Software Engineer",
    tag1: "Full-time",
    tag2: "Entry level",
    payments: "$55/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "1 week ago",
    jobPosition: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid level",
    payments: "$60/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Meta",
    datePosted: "5 days ago",
    jobPosition: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    payments: "$70/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    jobPosition: "Cloud Solutions Architect",
    tag1: "Part-time",
    tag2: "Senior level",
    payments: "$75/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "10 days ago",
    jobPosition: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    payments: "$65/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    jobPosition: "Data Scientist",
    tag1: "Full-time",
    tag2: "Entry level",
    payments: "$50/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    companyName: "Tesla",
    datePosted: "1 week ago",
    jobPosition: "Embedded Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    payments: "$68/hour",
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    companyName: "Adobe",
    datePosted: "6 days ago",
    jobPosition: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid level",
    payments: "$40/hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    companyName: "Uber",
    datePosted: "3 weeks ago",
    jobPosition: "Mobile App Developer",
    tag1: "Full-time",
    tag2: "Mid level",
    payments: "$55/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    companyName: "Airbnb",
    datePosted: "2 weeks ago",
    jobPosition: "Product Manager",
    tag1: "Full-time",
    tag2: "Senior level",
    payments: "$80/hour",
    location: "San Francisco, USA"
  }
];
  return (
    <div className="parent">
      {jobOpenings.map((elem, idx) => {
        return(
          <div key={idx}>
            <Cards brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} jobPosition={elem.jobPosition} tag1={elem.tag1} tag2={elem.tag2} payments={elem.payments} location={elem.location} />;
          </div>
        )
      })}
    </div>
  );
};

export default App;
